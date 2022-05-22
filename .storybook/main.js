module.exports = {
  stories: ['../src/**/*stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-postcss', // TODO: CSS LEGACY
    '@storybook/addon-viewport',
    'storybook-dark-mode',
  ],
};
