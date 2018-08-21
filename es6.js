const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();
app.use(async (ctx,next)=>{
	ctx.body='hello wored'
	await next();
})
app.use(async (ctx, next) => {
	console.log("2-start");
	await next();
	
});
let prm = new Promise(
	function(resolve, reject) {
	              setTimeout(function () {
		              resolve('异步处理成功');
	              })
	}
	
);
function getPr(x) {
	return new Promise(
		function(resolve, reject) {
			setTimeout(function () {
				resolve('异步处理成功新的'+x);
			})
		})
}
prm.then(function (res) {
	console.log(res)
        return getPr(res)
}).then(function (res) {
	console.log(res)
});
function *Gen() {
	yield new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve('one');
		})
	});
	yield new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve('TWO');
		})
	})
}
let genPr=Gen();
let res = genPr.next();

http.createServer(app.callback()).listen(3003);
http.createServer(app.callback()).listen(3004);
http.createServer(app.callback()).listen(3005);
