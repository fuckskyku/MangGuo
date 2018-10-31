const express=require('express');
const expressStatic=require('express-static');
const mysql=require('mysql');
const multer=require('multer');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const cookieSession=require('cookie-session');
const consolidate=require('consolidate');
const expressRoute=require('express-route');

var server=express();

server.listen(8080);

//1.获取请求数据
//get 自带
server.use(bodyParser.urlencoded());
const multerObj=multer({dest:'./static/upload'});
server.use(multerObj.any());


//2.cookie session

server.use(cookieParser());

(function(){//函数包起来以免污染全局变量
	var arr=[];
	for(var i=0;i<10000;i++){
		arr.push('key_'+Math.random());
	}

	server.use(cookieSession({
		name:'sess_id',
		keys:arr,
		maxAge:20*60*1000
	}));
})();

//3.模板

server.set('view engine','html');
server.set('views','./template');
server.engine('html',consolidate.ejs);

//4.route
server.use('/',require('./route/web/web.js')());//只要是根目录下的引入首页
server.use('/admin',require('./route/admin/index.js')());
server.use('/index',require('./route/web/web.js')());

//5.default ：expressStatic

server.use(expressStatic(__dirname,'./static'));