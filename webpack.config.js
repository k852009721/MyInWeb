const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index:['./src/index/index.js', './src/index/index.scss'],
    iconbar:['./src/iconBar/iconbar.js','./src/iconBar/iconbar.scss'],
},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            //用來產生css檔案的loader
            loader: MiniCssExtractPlugin.loader,
          },
          {
            //用來讀取css的loader
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            //用來產生css檔案的loader
            loader: MiniCssExtractPlugin.loader,
          },
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
    }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HTMLPlugin({
      template:'./src/index/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HTMLPlugin({
      template:'./src/iconBar/iconbar.html',
      filename: 'iconbar.html',
      chunks: ['iconbar'],
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
