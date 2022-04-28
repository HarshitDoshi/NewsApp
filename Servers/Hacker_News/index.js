const Koa = require('koa');
const app = new Koa();

app.use(async (context, next) => {
  await next();
  const responseTime = context.response.get('X-Response-Time');
  console.log(`${context.method} : ${context.url} - ${responseTime}`);
});

app.use(async (context, next) => {
  const start = Date.now();
  await next();
  const milliseconds = Date.now() - start;
  context.set('X-Response-Time', `${milliseconds}ms`);
});

app.use(async (context) => {
  context.body = 'Hello, world!';
});

app.listen(3000);
