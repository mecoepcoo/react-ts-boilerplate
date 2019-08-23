module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "react-app",
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "globals": {
    "wx": true,
    "$": true,
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parser": "typescript-eslint-parser",
      "plugins": ["typescript"],
      "rules": {
        "no-unused-vars": "off"
      }
    }
  ]
}
