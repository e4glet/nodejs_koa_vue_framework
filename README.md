# nodejs+koa+vuejs Web开发框架(未使用vue-cli脚手架版本)
### 作者：eaglet liyaohua8468@gmail.com
### 天津市工业大学 计算机科学与软件学院 天津市大学软件学院

#### 目录

- 简介
- 目录结构介绍
- 环境要求
- 初始化环境
- 如何启动

#### 一、简介
  本框架是基于nodejs的koa搭建的Web开发框架，参考MVC框架风格，本框架包含数据库操作示例和注解。
  适合nodejs入门学习或者nodejs开发人员使用nodejs koa框架开发中小型web项目。
  前端适用vue.js的axios异步交互，做到前后端完全分离，后续我会再做一个vue-cli脚手架版本。

#### 二、目录结构介绍
    –bin            项目的底层核心，路由配置文件
	-conf           配置目录（数据库连接信息和数据库工具模块）
	-controller     控制器目录
	-dal            数据层目录
	-api            接口层目录
    –node_modules   项目中依赖的包
    –public         公共资源放的目录
    –routes         路由（分层路由）
    –views          静态页面（vue.js页面）
    –app.js         项目的入口文件。当然你也可以改成其他的名字。
    –package.json    项目版本信息文件（含启动信息）
	-move.sql        mysql导出文件 
    
#### 三、环境要求
- nodejs v7.6.0及以上版本，当前项目构建于v10.15.0版本
- vue.js koa
- 系统环境：windows/linux/Mac OS
- 数据库:MySQL 5.6
- 开发工具：Sublime Text、VS Code等

###  四、初始化环境
1. 在命令行输入命令，安装依赖
```c
npm install -g
```

2. 安装koa框架支持
```c
npm install koa -g
``` 

3. NodeJS热部署工具 — supervisor
```c
npm install supervisor -g
```

以上环境初始化之后即可运行项目


#### 五、如何启动？
以windows系统为例：
打开CMD，进入项目目录
运行npm start

打开浏览器：http://localhost:3000/
即可访问项目。
```c
D:\vuejs\nodejs_koa_vue_framework>npm start

server is running at 3000 port

```

如使用supervisor启动
```c
G:\nodejs\nodejs_koa_vue_framework-master>npm start

> nodejs_koa_vue_framework@1.0.0 start G:\nodejs\nodejs_koa_vue_framework-master

> supervisor app.js


Running node-supervisor with
  program 'app.js'
  --watch '.'
  --extensions 'node,js'
  --exec 'node'

Starting child process with 'node app.js'
Watching directory 'G:\nodejs\nodejs_koa_vue_framework-master' for changes.
Press rs for restarting the process.
crashing child
Starting child process with 'node app.js'
server is running at 3000 port

```

## 小结
目前这个KOA MVC框架已经编写完成，后续会逐步更新和完善，希望可以帮助一些想学习nodejs的朋友。如果你有更好改进建议，欢迎指正。
邮箱：liyaohua8468@gmail.com
