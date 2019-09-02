// 启动 koa server 来提供 mock
// 或者直接用 mockjs 拦截 ajax
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

const data = require('./data');

let home = new Router();
home.get('/', async ctx => {
  ctx.body = 'Hello World!';
});

let router = new Router();
router.use('/', home.routes(), home.allowedMethods());

router.use('/mock', data.routes(), data.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

const port = 3333;

app.listen(port);
console.log('Mock Server is running at http://localhost:' + port);
