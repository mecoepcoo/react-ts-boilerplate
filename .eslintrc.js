module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    // "jquery": true
    "jest": true,
    "jsx-control-statements/jsx-control-statements": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": 'module'
  },
  "globals": {
    // "wx": "readonly",
  },
  "extends": [
    "plugin:jsx-control-statements/recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint", "react", "jsx-control-statements", "prettier"],
  "rules": {
    "prettier/prettier": 2,
    "no-unused-vars": 0
  }
};
