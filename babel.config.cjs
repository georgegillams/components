const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: !isProduction,
        fileName: !isProduction,
      },
    ],
  ],
};
