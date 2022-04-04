const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'docs'),
  },
  resolve: {
    fallback: {
      buffer: false,
      fs: false,
      path: false,
    },
  },
  devServer: {
    hot: true,
    liveReload: true,
    port: 9090,
    static: './docs',
    watchFiles: ['./specs/**openapi.yaml']
  },
  performance: {
    maxEntrypointSize: 2097152,
    maxAssetSize: 2097152,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.+openapi.yaml$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        }
      }
    ],
  },
};
