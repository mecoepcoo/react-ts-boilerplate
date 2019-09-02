const Mock = require('mockjs');
const Router = require('koa-router');

let data = new Router
data.get('/data', async ctx => {
  ctx.body = Mock.mock({
    'array|1-10': [
      {
        'name': Mock.mock('@cname')
      }
    ]
  });
});

module.exports = data;
