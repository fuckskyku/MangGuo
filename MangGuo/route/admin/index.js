const express=require('express');
const mysql=require('mysql');
const common=require('../../libs/common');

module.exports=function (){
	var router=express.Router();
    //连接数据库
    var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'mongo'});
     // 2检查登录状态
	router.use((req,res,next)=>{
		if(!req.session['admin_id'] && req.url!='/login'){//没有登录
			res.redirect('/admin/login');
		}else{
			next();
		}
	});
      
	router.get('/login',(req,res)=>{//如果是get 只是看页面
		res.render('admin/login.ejs',{});//1、login先渲染
	});
	//router.use() 开始要使用这个
	router.post('/login',(req,res)=>{//router.get 要使用use 
		//console.log(req.body);//看数据 看看是否能请求到用户名 密码
		var username=req.body.username;
		var password = common.md5(req.body.password+common.MD5_SUFFIX);
		//var password=req.body.password;
		console.log(password)
		db.query(`SELECT * FROM admin_table WHERE username='${username}'`,(err,data)=>{
           if(err){
				console.log(err);//调试
				res.status(500).send('database error').end();
			}else{
				if(data.length==0){//请求数据为空
					res.status(400).send('no this admin').end();
				}else{
					//有数据 
					if(data[0].password==password){//拿到的md5 的password 和请求的过来的password 也就是说把var请求过来的密码转成md5passwod
					 //成功
					 req.session['admin_id'] =data[0].ID;//如果有数据的id 就登录成功
					 res.redirect('/admin/');//跳转回根目录 从新render
					}else{
					  res.status(400).send('this.password is incorrect').end();
					}
				}
			}
		});
	})
	//router.post end
	
	router.get('/',(req,res)=>{
		res.render('admin/index.ejs',{});
	});
    
	router.use('/banners/',require('./banners.js')());
	router.use('/blog/',require('./blog.js')());
	router.use('/custom/',require('./custom.js')());
	router.use('/article/',require('./article.js')());
	router.use('/intro/',require('./intro.js')());
	return router;
};
