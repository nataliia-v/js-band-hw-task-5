module.exports = {
  verbose: true,
  rootDir: ".",
  // Custom transformer to use custom .babelrc.js
  "transform": {
    "^.+\\.js$": "<rootDir>/jest-transformer.js"
  },
  // File mocks. To run tests properly.
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
