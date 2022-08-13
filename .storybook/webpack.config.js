module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.jsx?$/,
    use: ['babel-loader'],
    exclude: /node_modules/,
  });

  return config;
};
