'use strict';

module.exports = {
  'presets': [
    ['@babel/preset-env', { modules: 'commonjs' }],
  ],
  'plugins': [
    '@babel/plugin-proposal-object-rest-spread',
    // to make `async/await` works
    ['@babel/transform-runtime', {
      'regenerator': true
    }]
  ]
};
