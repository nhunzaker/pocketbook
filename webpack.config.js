var Webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool : 'source-map',

  entry: ['./src/index.jsx'],

  output: {
    filename: 'assets/js/application.js',
    path: __dirname,
    publicPath: '/',
    devtoolModuleFilenameTemplate: '[resource-path]'
  },

  resolve: {
    extensions: [ '', '.js', '.jsx', '.json', '.scss', '.svg' ],
    modulesDirectories: [ 'web_modules', 'node_modules', 'src', 'lib' ],
    alias: {
      'react-router': 'react-router/build/npm/lib'
    }
  },

  plugins: [
    // Note: for production, you should probably do some sort of check
    // in your index.html file before loading this
    new ExtractTextPlugin("assets/css/application.css", {
      disable: process.env.NODE_ENV !== 'production'
    }),
    new Webpack.ProvidePlugin({
      React: process.env.NODE_ENV === 'test' ? 'react/addons' : 'react'
    })
  ],

  postcss: [
    require('autoprefixer-core'),
    require('csswring')
  ],

  node: {
    console: false,
    process: false,
    global: true,
    Buffer: false,
    __filename: 'mock',
    __dirname: 'mock'
  },

  module: {
    loaders: [
      {
        test    : /\.s*(c|a)ss$/,
        loader  : ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : 'react-hot!source-map!babel?experimental'
      },
      {
        test    : /\.json$/,
        loader  : 'json'
      }
    ],
    postLoaders: [
      {
        test    : /\.jsx*$/,
        loader  : 'envify-loader'
      }
    ]
  }
}
