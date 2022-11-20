module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: 'cjs',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['babel-plugin-add-import-extension', { extension: 'cjs', replace: true }],
  ],
};
