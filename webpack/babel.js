const babelConfig = require('../.babelrc.js');

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: babelConfig,
        },
      ],
    },
  };
};
