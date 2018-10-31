const express=require('express');
const mysql=require('mysql');

module.exports=function (){
	var router=express.Router();
	
	//连接数据库
	var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'mongo'});
	
// 	router.get('/get_banners',(req,res)=>{
// 		db.query(`SELECT * FROM swiper_table`,(err,data)=>{
// 			if(err){
// 				res.status(500).send('database error').end();
// 			}else{
// 				res.send(data).end();
// 				banners: data;
// 			}
// 		})
// 	});
	router.get('/',(req,res)=>{
		db.query(`SELECT * FROM content_table`,(err,data)=>{
			
			if(err){
				res.status(500).send('database error').end();
			}else{
				if(data.length==0){//请求数据为空
					res.status(404).send('no this index').end();
				}else{//有数据 
					db.query(`SELECT * FROM blog_table`,(err,blog)=>{
						if(err){
							res.status(500).send('database error').end();
						}else{
							if(blog.length==0){//请求数据为空
								res.status(404).send('no this index').end();
							}else{//有数据 
								db.query(`SELECT * FROM banner_table`,(err,banner)=>{
									if(err){
										res.status(500).send('database error').end();
									}else{
										if(blog.length==0){//请求数据为空
											res.status(404).send('no this index').end();
										}else{//有数据 
											console.log(banner)
											res.render('web/index.ejs',{banners: banner,contents: data,blogs: blog});
										}	
									}
								});
								
							}	
						}
					});
								
				}
			}
		})
	})
	
	
	router.get('/news',(req,res)=>{
		db.query(`SELECT * FROM news_table`,(err,data)=>{
			
			if(err){
				res.status(500).send('database error').end();
			}else{
				if(data.length==0){//请求数据为空
					res.status(400).send('no this admin').end();
				}else{//有数据 
					console.log(data);
					res.render('web/news.ejs',{news: data});
				}
			}
		})
	})
	
	
	router.get('/get',(req,res)=>{
		db.query(`SELECT * FROM news_table`,(err,data)=>{
			
			if(err){
				res.status(500).send('database error').end();
			}else{
				if(data.length==0){//请求数据为空
					res.status(400).send('no this admin').end();
				}else{//有数据 
					console.log(data);
					res.send(data).end();	
				}
				
				
			}
		})
	})
	
	
	
	router.get('/contact',(req,res)=>{
		res.render('web/contact.ejs',{});
		
	})
	return router;
};
