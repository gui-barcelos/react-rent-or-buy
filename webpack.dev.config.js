import webpack from 'webpack';
import path from 'path';
import combineLoaders from 'webpack-combine-loaders';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './app/index'
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'app'), loaders: ['babel'] },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          combineLoaders([{
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }])
        )
      },
      { test: /\.json$/, loader: 'json' }
    ]
  }
};