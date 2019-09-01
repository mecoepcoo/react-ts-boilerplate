const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const env = argv.env || 'production';
const ENV_FILE_PATH = path.resolve(__dirname, '../.env');

let dotenvFiles = [
  `${ENV_FILE_PATH}.${env}.local`,
  `${ENV_FILE_PATH}.${env}`,
  env !== 'test' && `${ENV_FILE_PATH}.local`,
  ENV_FILE_PATH
].filter(Boolean);

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    dotenvExpand(dotenv.config({
      path: dotenvFile
    }));
  }
});

const REACT_APP = /^REACT_APP_/i;

function getClientEnvironment(publicUrl) {
  publicUrl = process.env.NODE_ENV === 'production' ? publicUrl.slice(0, -1) : '';
  const raw = Object.keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        NODE_ENV: process.env.NODE_ENV || 'production', // webpack在production模式下会自动启用一些配置
        APP_ENV: env,
        PUBLIC_URL: publicUrl
      }
    );
  
  const stringified = {};
  Object.keys(raw).forEach((key, index) => {
    stringified['process.env.' + key] = JSON.stringify(raw[key]);
  });

  return { raw, stringified };
}

module.exports = getClientEnvironment;
