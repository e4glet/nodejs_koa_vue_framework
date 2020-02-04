//2020年2月
//e4glet
//app.js程序入口
const Koa=require('koa');
const app=new Koa();
//引入koa静态文件模块
const static = require('koa-static');
const path = require('path')
// 引入模块 
const bodyParser = require('koa-bodyparser'); 

//引入层级路由模块
let router = require('./routes/index');

// 配置静态web服务的中间件
app.use(static(
    path.join( __dirname,  './public')
));
// 挂载到app 
// 使用参考：ctx.request.body 获取post提交的数据
app.use(bodyParser()); 
//应用启动路由
app
    .use(router.routes())
    .use(router.allowedMethods());   
//监听3000端口
app.listen(3000,()=>{
	console.log("server is running at 3000 port");
});