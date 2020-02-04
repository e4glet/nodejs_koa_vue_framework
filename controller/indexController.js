//2020年2月
//e4glet
//index控制器
const fs = require('fs');
const userdal=require('../dal/userDAL.js');


function indexController(router) {
	//index
	router.get('/', async (ctx) => {
		//ctx.body="这是前台首页";
		ctx.status = 200;
		ctx.type = "html";
		ctx.body = fs.createReadStream('./views/index.html');
		console.log(200);
	});

	//登录请求
	router.post('/validatelogin', async (ctx, next) => {
		let {username,password} = ctx.request.body //获取post提交的数据
		let data = await userdal.checkUser(username,password)
		
		return ctx.response.body = data
	});
}


//导出模块
module.exports = indexController;
