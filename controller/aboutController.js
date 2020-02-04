//2020年2月
//e4glet
//about控制器


function aboutController(router) {
	// //路由定义请求路径
	//about
	router.get('/about', async (ctx) => {
		ctx.body = "这是关于页面";
	});
}

//导出模块
module.exports = aboutController;
