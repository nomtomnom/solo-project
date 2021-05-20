const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: './client/app.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.s[ca]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    publicPath: '/build',
    compress: true,
    proxy: {
      '/login': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
    },
  },
}