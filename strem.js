const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
	console.log('3');
	await next();
	console.log('4');
});

// x-response-time

app.use(async (ctx, next) => {
	console.log('1')
	await next();
	console.log('2')
});

// response

app.use(async ctx => {
	console.log('5')
	ctx.body = 'Hello World';
});

app.listen(3003);
//koa2的回流身法