const ExtractTextPlugin = require("extract-text-webpack-plugin");
let path = require('path');
const webpack = require('webpack');

// https://stackoverflow.com/questions/42749973/es6-import-using-at-sign-in-path-in-a-vue-js-project-using-webpack
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // entry: { // https://webpack.js.org/concepts/entry-points/
  //   // protovue: [__dirname + '/webroot/js/vue/main.js'],
  // },
  // output: {
  //   path: __dirname,
  //   filename: "./webroot/js/[name].js"
  // },
  entry: [
    __dirname + '/webroot/js/vue/main.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8028/'
  ],
  output: {
    path: __dirname,
    filename: './webroot/js/app.js',
    publicPath: './webroot',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "css-loader"
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          }
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader?stripdeclarations'
      },
      { // added for vuetify: https://vuetifyjs.com/style/theme
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('webroot/js/vue') // link to vue src directory
    },
  },
  plugins: [
    new ExtractTextPlugin({ filename: "webroot/css/[name].css", allChunks: false }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map'
};
