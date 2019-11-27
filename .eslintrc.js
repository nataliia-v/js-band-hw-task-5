module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "node": true,
        "es6": true,
        "jest/globals": true
    },
    "extends":["plugin:jest/recommended", "eslint:recommended","airbnb-base", "prettier"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["jest", "prettier"],
    "rules": {
        'prettier/prettier': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "no-console":0,
    }
};