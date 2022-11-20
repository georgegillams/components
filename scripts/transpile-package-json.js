/* eslint-disable no-console */
import { writeFileSync } from 'fs';

import packageData from '../package.json';

import { blue } from './colors';

console.log('Transpiling package.json');
console.log('');

const newPackageData = JSON.parse(JSON.stringify(packageData));
newPackageData.type = 'module';
newPackageData.exports = {
  import: './index.mjs',
  require: './index.cjs',
};
const fileContent = `${JSON.stringify(newPackageData, null, 2)}\n`;
writeFileSync('dist/package.json', fileContent, 'utf8');
console.log(blue('package.json transpiled'));
