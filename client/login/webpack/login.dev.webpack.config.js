const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000',
      '../Login.client.entry.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, '../../../public/login'),
    publicPath: '/login',
    filename: 'js/[name].js'
  },
  context: __dirname,
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }], 'react'],
            plugins: [
              'transform-runtime',
              'transform-object-rest-spread',
              'syntax-dynamic-import',
              'react-hot-loader/babel'
            ],
            babelrc: false
          }
        }
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [
      '*',
      '.json',
      '.js',
      '.jsx',
      '.scss'
    ]
  }
};
