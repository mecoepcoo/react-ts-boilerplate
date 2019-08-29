const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod');

const spinner = ora('webpack编译开始...\n').start();

webpack(webpackConfig, (err, stats) => {
  if (err) {
    spinner.fail('编译失败');
    console.log(err);
    return;
  }
  spinner.succeed('编译结束!\n');

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');
  console.log(chalk.cyan('  编译成功!\n'));
  console.log(chalk.yellow('提示：编译后的index.html无法直接通过file://打开\n'));
});
