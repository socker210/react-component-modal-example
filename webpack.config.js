const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
}
