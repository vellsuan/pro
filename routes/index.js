const router = require('koa-router')()
const multer = require('koa-multer');//加载koa-multer模块

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
var storage = multer.diskStorage({
	//文件保存路径
	
	destination: function (req, file, cb) {
		
		cb(null,'C:/Users/DELL/Desktop/koa2/test_koa/public/uploads')
	},
	//修改文件名称
	filename: function (req, file, cb) {
	 
		var fileFormat = (file.originalname).split(".");
		
		cb(null,fileFormat[0]+'.'+fileFormat[1]);
	}
})
//加载配置
var upload = multer({ storage: storage });

router.post('/upload',upload.single('file'), async (ctx, next) => {
	
	console.log(ctx.req)
	ctx.body = {
		/*filename: ctx.req.file.filename//返回文件名*/
		filename: {originalname, path, mimetype} = ctx.req.file
	}
})

//文件上传
//配置


module.exports = router
