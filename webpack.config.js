const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

  console.log(env.NODE_ENV);

  return {
    entry: {
      index: './src/index.jsx',
      login: './src/pages/login.jsx',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@mlambda-net/core': path.resolve(__dirname, './src/components'),
      },
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.s[ac]ss$/,
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
            }
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
      new Dotenv({
        path: `.env.${env.PATH}`,
      }),
    ],
    target: 'web',
  };
};
