const express=require('express');
const mysql=require('mysql');


var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'mongo'});


module.exports=function(){
	var router=express.Router();
     router.get('/',(req,res)=>{
       switch(req.query.act){//act有几种 所以考虑使用switch
            case 'mod'://修改
              db.query(`SELECT * FROM swiper_table WHERE id=${req.query.id}`,(err,data)=>{
                if(err){
                    console.log();
                    res.status(500).send('database error').end();
                }else if(data.length==0){//找到了id 数据是否为空
                   res.status(404).send('data not found');
                }else{
                  db.query(`SELECT * FROM swiper_table`,(err,intro)=>{
                   if(err){
                   res.status(500).send('database error').end();
                   }else{
                       res.render('admin/intro.ejs',{intro,mod_data: data[0]});
                    }
                   });
                 }
              });
            break;
            case 'del':
            db.query(`DELETE FROM swiper_table WHERE ID=${req.query.id}`,(err,data)=>{
             if(err){
              console.log(err);//调试
              res.status(500).send('database error').end();      
             }else{
                res.redirect('/admin/intro');//数据删除依然重新redirect
             }
            });
            break;
            default://默认正常渲染
            db.query(`SELECT * FROM swiper_table`,(err,data)=>{
            if(err){
             res.status(500).send('database error').end();
            }else{
             // console.log(intro);
             res.render('admin/intro.ejs',{intro:data})
            }
       });
       }  
     });
     router.post('/',(req,res)=>{
     
       var title=req.body.title;
       var intro=req.body.intro;
        //做校验
        if(!title || !intro){
            res.status(400).send('arg error').end();
        }else{//数据检查通过
             if(req.body.mod_id){//修改
               db.query(`UPDATE swiper_table SET \
                title='${req.body.title}',\
                
                intro='${req.body.intro}'\
                WHERE ID=${req.body.mod_id}`,
                (err,data)=>{
                    if(err){
                       res.status(500).send('database error').end();
                    }else{
                    res.redirect('/admin/intro');
                    }
               });
             }else{//添加
             db.query(`INSERT INTO swiper_table (title,intro) VALUE('${title}','${intro}')`,(err,data)=>{
             if(err){
               res.status(500).send('database error').end();
             }else{
             // res.send('ok了').end();
             res.redirect('/admin/intro');
             }
            });
            } 
        } 
     });

	return router;
}





 