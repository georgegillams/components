const backstop = require('backstopjs');
const scenarioData = require('./scenarios.json');

const PORT = 9001;
const BASE_URL = `http://127.0.0.1:${PORT}/iframe.html?id=`;

const allowFailure = process.argv.includes('--allowFailure');

let scenarios = [];

scenarioData.scenarioIds.forEach(sI => {
  scenarios.push({
    label: sI,
    url: `${BASE_URL}${sI}`,
  });
});

const config = {
  id: 'gg-components-default',
  misMatchThreshold: 3,
  viewports: [
    {
      label: 'phone',
      width: 320,
      height: 480,
    },
    {
      label: 'tablet',
      width: 1024,
      height: 768,
    },
  ],
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  scenarios: scenarios,
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};

console.log(`config.misMatchThreshold`, config.misMatchThreshold);

backstop('test', { config: config })
  .then(() => {
    // test successful
    console.log(`All good 👍`);
    process.exit(0);
  })
  .catch(() => {
    //       // test failed
    backstop('approve', { config: config }).then(() =>
      process.exit(allowFailure ? 0 : 1),
    );
  });
