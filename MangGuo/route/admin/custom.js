const express=require('express');
const mysql=require('mysql');


var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'mongo'});


module.exports=function(){
	var router=express.Router();
     router.get('/',(req,res)=>{
       switch(req.query.act){//act有几种 所以考虑使用switch
            case 'mod'://修改
              db.query(`SELECT * FROM news_table WHERE id=${req.query.id}`,(err,data)=>{
                if(err){
                    console.log();
                    res.status(500).send('database error').end();
                }else if(data.length==0){//找到了id 数据是否为空
                   res.status(404).send('data not found');
                }else{
                  db.query(`SELECT * FROM news_table`,(err,news)=>{
                   if(err){
                   res.status(500).send('database error').end();
                   }else{
                       res.render('admin/custom.ejs',{news,mod_data: data[0]});
                    }
                   });
                 }
              });
            break;
            case 'del':
            db.query(`DELETE FROM news_table WHERE ID=${req.query.id}`,(err,data)=>{
             if(err){
              console.log(err);//调试
              res.status(500).send('database error').end();      
             }else{
                res.redirect('/admin/custom');//数据删除依然重新redirect
             }
            });
            break;
            default://默认正常渲染
            db.query(`SELECT * FROM news_table`,(err,data)=>{
            if(err){
             res.status(500).send('database error').end();
            }else{
             // console.log(news);
             res.render('admin/custom.ejs',{news:data})
            }
       });
       }  
     });
     router.post('/',(req,res)=>{
     
		var username=req.body.username;
		var title=req.body.title;
		var content=req.body.content;     
		var time=req.body.time;
		var view = req.body.view;
		var imgUrl = req.body.imgUrl;

        //做校验
        if(!username || !title || !content || !time || !view || !imgUrl){
            res.status(400).send('arg error').end();
        }else{//数据检查通过
             if(req.body.mod_id){//修改
               db.query(`UPDATE news_table SET \
                username='${req.body.username}',\
                title='${req.body.title}',\
                content='${req.body.content}',\
				time='${req.body.time}',\
				view='${req.body.view}',\
				view='${req.body.imgUrl}'\
                WHERE ID=${req.body.mod_id}`,
                (err,data)=>{
                    if(err){
                       res.status(500).send('database error').end();
                    }else{
                    res.redirect('/admin/custom');
                    }
               });
             }else{//添加
             db.query(`INSERT INTO news_table (username,title,content,time,view,imgUrl) VALUE('${username}','${title}','${content}','${time}','${view}','${imgUrl}')`,(err,data)=>{
             if(err){
               res.status(500).send('database error').end();
             }else{
				// res.send('ok了').end();
				res.redirect('/admin/custom');
             }
            });
            } 
        } 
     });

	return router;
}





 