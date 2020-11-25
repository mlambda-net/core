const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
    '@storybook/addon-backgrounds',
    'storybook-dark-mode',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    // do mutation to the config
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    });
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    });
    config.resolve.extensions.push('.js', '.jsx');
    config.resolve.alias['@mlambda-net/core'] = path.resolve(
      __dirname,
      '../src/packages'
    );
    return config;
  },
};
