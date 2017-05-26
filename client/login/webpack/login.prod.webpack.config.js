const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');


const outputPath = path.join(__dirname, '../../../public/login');

module.exports = {
  entry: {
    app: [
      '../Login.client.entry.jsx'
    ]
  },
  output: {
    path: outputPath,
    publicPath: '/login/',
    filename: 'js/[name]-[chunkhash].js'
  },
  context: __dirname,
  devtool: 'nosources-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
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
              'syntax-dynamic-import'
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
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin({
      filename: 'css/styles-[contenthash].css',
      disable: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path: outputPath,
      prettyPrint: true
    }),
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
