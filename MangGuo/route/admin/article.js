const express=require('express');
const mysql=require('mysql');


var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'mongo'});


module.exports=function(){
	var router=express.Router();
     router.get('/',(req,res)=>{
       switch(req.query.act){//act有几种 所以考虑使用switch
            case 'mod'://修改
              db.query(`SELECT * FROM article_table WHERE id=${req.query.id}`,(err,data)=>{
                if(err){
                    console.log();
                    res.status(500).send('database error').end();
                }else if(data.length==0){//找到了id 数据是否为空
                   res.status(404).send('data not found');
                }else{
                  db.query(`SELECT * FROM article_table`,(err,articles)=>{
                   if(err){
                   res.status(500).send('database error').end();
                   }else{
                       res.render('admin/article.ejs',{articles,mod_data: data[0]});
                    }
                   });
                 }
              });
            break;
            case 'del':
            db.query(`DELETE FROM article_table WHERE ID=${req.query.id}`,(err,data)=>{
             if(err){
              console.log(err);//调试
              res.status(500).send('database error').end();      
             }else{
                res.redirect('/admin/article');//数据删除依然重新redirect
             }
            });
            break;
            default://默认正常渲染
            db.query(`SELECT * FROM article_table`,(err,data)=>{
            if(err){
             res.status(500).send('database error').end();
            }else{
							// console.log(articles);
							res.render('admin/article.ejs',{articles:data})
            }
       });
       }  
     });
     router.post('/',(req,res)=>{
     
       var title=req.body.title;
      
        //做校验
        if(!title){
            res.status(400).send('arg error').end();
        }else{//数据检查通过
             if(req.body.mod_id){//修改
               db.query(`UPDATE article_table SET \
                title='${req.body.title}'\
                
                WHERE ID=${req.body.mod_id}`,
                (err,data)=>{
                    if(err){
                       res.status(500).send('database error').end();
                    }else{
                    res.redirect('/admin/article');
                    }
               });
             }else{//添加
             db.query(`INSERT INTO article_table (title) VALUE('${title}')`,(err,data)=>{
             if(err){
               res.status(500).send('database error').end();
             }else{
             // res.send('ok了').end();
             res.redirect('/admin/article');
             }
            });
            } 
        } 
     });

	return router;
}





 