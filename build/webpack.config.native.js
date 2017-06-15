var path = require('path');
var fs = require('fs-extra');
var webpack = require('webpack');

var entry = {};

(function walk(dir) {
  dir = dir || '.';
  var directory = path.join(__dirname, '../examples', dir);
  fs.readdirSync(directory)
    .forEach(function (file) {
      var fullpath = path.join(directory, file);
      var stat = fs.statSync(fullpath);
      var extname = path.extname(fullpath);
      if (stat.isFile() && extname === '.vue') {
        var name = path.join(dir, path.basename(file, extname));
        entry[name] = fullpath + '?entry=true';
      } else if (stat.isDirectory()) {
        var subdir = path.join(dir, file);
        walk(subdir);
      }
    })
})();

var bannerPlugin = new webpack.BannerPlugin({
  banner: '// { "framework": "Vue" }\n',
  raw: true,
});

var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    unused: true,
    dead_code: true,
    warnings: false,
    screw_ie8: true,
  }
});

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, '../dist/native'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'wxui': path.resolve(__dirname, '../src/components/'),
    }
  },
  module: {
    rules: [
      { test: /\.js(\?[^?]+)?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue(\?[^?]+)?$/, loaders: ['weex-loader'] },
    ]
  },
  plugins: [uglifyJsPlugin, bannerPlugin]
};
