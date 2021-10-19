/* eslint-disable no-console */
// import { writeFile, unlinkSync } from 'fs';
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

import { yellow } from './colors';

// commitHash changeType(category): message
const HIDDEN_CHANGE_TYPES = ['chore'];
const COMMIT_REGEX = /([a-z0-9]+) ([a-zA-Z ]+)(\(.+\))?: (.+)/gm;

const getLastTagOnCurrentBranch = () =>
  execSync('git describe --abbrev=0 --tags')
    .toString()
    .split('\n')[0];

const parseCommit = commit => {
  // Reset the regex each time we use it:
  COMMIT_REGEX.lastIndex = 0;
  const splitCommit = RegExp(COMMIT_REGEX).exec(commit);
  if (!splitCommit) {
    console.log(yellow(`Including invalid commit message as patch: ${commit}`));
    return { changeType: 'patch', message: commit };
  }
  const changeType = splitCommit[2];
  const category = splitCommit[3];
  let message = splitCommit[4];
  if (category) {
    message = `${category} - ${message}`;
  }
  return { changeType, message };
};

const getChangesData = () => {
  const changes = {};
  const lastTag = getLastTagOnCurrentBranch();
  const commits = execSync(`git log ${lastTag}..HEAD --oneline`)
    .toString()
    .split('\n')
    .filter(s => s !== '');
  commits.forEach(commit => {
    const { changeType, message } = parseCommit(commit);

    if (!changes[changeType]) {
      changes[changeType] = [];
    }
    changes[changeType].push(message);
  });
  return changes;
};

const getSemverBumpFromChanges = changes => {
  let semverBump = 'patch';
  Object.keys(changes).forEach(changeType => {
    if (changeType === 'feat') {
      semverBump = 'minor';
    } else if (changeType === 'BREAKING CHANGE') {
      semverBump = 'major';
    }
  });
  return semverBump;
};

const generateMarkdown = (newVersion, changes) => {
  let result = `## ${newVersion}\n\n`;
  Object.keys(changes)
    .filter(changeType => !HIDDEN_CHANGE_TYPES.includes(changeType))
    .forEach(changeType => {
      result += `### ${changeType}\n\n`;
      changes[changeType].forEach(message => {
        result += ` - ${message}\n`;
      });
      result += '\n';
    });
  return result;
};

const addToChangelog = newEntries => {
  const changelogFile = './CHANGELOG.md';
  const changelogContent = readFileSync(changelogFile, { encoding: 'utf8' });
  const changelogTitle = `# Changelog\n\n`;
  const currentChanges = changelogContent.split(changelogTitle)[1];
  const output = `${changelogTitle}${newEntries}${currentChanges}`;
  writeFileSync(changelogFile, output, { encoding: 'utf8' });
};

export {
  getChangesData,
  getSemverBumpFromChanges,
  generateMarkdown,
  addToChangelog,
};
