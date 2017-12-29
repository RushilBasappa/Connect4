import path from 'path';
import webpack from 'webpack';

export default {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '/src/js/index.js')
  ],
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}