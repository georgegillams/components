/* eslint-disable no-console */
import { writeFileSync } from 'fs';
import { execSync } from 'child_process';

import { inc } from 'semver';

import packageData, { version } from '../package.json';

import {
  getVersionRc,
  getChangesData,
  getSemverBumpFromChanges,
  generateMarkdown,
  addToChangelog,
} from './changelog-helpers.js';
import { blue, yellow } from './colors';

console.log('Starting release');
console.log('');

const updatePackageFile = (newVersion) => {
  const newPackageData = JSON.parse(JSON.stringify(packageData));
  newPackageData.version = newVersion;
  const fileContent = `${JSON.stringify(newPackageData, null, 2)}\n`;
  writeFileSync('package.json', fileContent, 'utf8');
  execSync('cp package.json ./dist/');
  execSync('cp README.md ./dist/');
  console.log(blue('package.json updated'));
};

const createTag = (newVersion) => {
  execSync(`git tag ${newVersion} && git push --tags`);
  console.log(blue('Release tagged'));
};

const commitChanges = (newVersion) => {
  execSync(`git add .`);
  execSync(`git commit -m "Publish ${newVersion}"`);
  execSync(`git push`);
  console.log(blue('Code pushed'));
};

const publishPackage = () => {
  execSync(`(cd dist && npm publish)`);
  console.log(blue('Package published'));
};

const getCurrentPublishedVersion = () => {
  try {
    return execSync(`npm view @george-gillams/components version`)
      .toString()
      .split('\n')[0];
  } catch (error) {
    return '0.0.0';
  }
};

const changeData = getChangesData();

let semverBump = getSemverBumpFromChanges(changeData);
if (process.argv.includes('--alpha')) {
  semverBump = 'alpha';
}
console.log(`semverBump`, semverBump);

const currentVersion = version;
const currentVersionPublished = getCurrentPublishedVersion();
if (currentVersion !== currentVersionPublished) {
  console.warn(
    yellow(
      `Published version (${currentVersionPublished}) does not match package.json version (${currentVersion})`,
    ),
  );
}
let newVersion = currentVersion;
if (semverBump === 'alpha') {
  newVersion = `${currentVersion}-alpha`;
} else {
  newVersion = inc(currentVersion, semverBump);
}
console.log(`Publishing version ${newVersion}`);

const versionRc = getVersionRc();

updatePackageFile(newVersion);
const changelogMarkdown = generateMarkdown(versionRc, newVersion, changeData);
addToChangelog(changelogMarkdown);
createTag(newVersion);
commitChanges(newVersion);
publishPackage();
console.log('Done');
