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
      //publicPath: '/',
      //contentBase: path.join(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@mlambda-net/core': path.resolve(__dirname, './src/packages'),
        /*
        react: path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        assets: path.resolve(__dirname, 'assets'),
        */
      },
    },
    /*
    externals: {
      // Don't bundle react or react-dom
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'React',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'ReactDOM',
        root: 'ReactDOM',
      },
    },

     */
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
