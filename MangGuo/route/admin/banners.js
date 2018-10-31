const express=require('express');
const mysql=require('mysql');

var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'mongo'});

module.exports=function(){
	var router=express.Router();
     router.get('/',(req,res)=>{
       switch(req.query.act){//act有几种 所以考虑使用switch
            case 'mod'://修改
              db.query(`SELECT * FROM banner_table WHERE id=${req.query.id}`,(err,data)=>{
                if(err){
                    console.log();
                    res.status(500).send('database error').end();
                }else if(data.length == 0){//找到了id 数据是否为空
                   res.status(404).send('data not found');
                }else{
                  db.query(`SELECT * FROM banner_table`,(err,banners)=>{
                   if(err){
                   res.status(500).send('database error').end();
                   }else{
											res.render('admin/banners.ejs',{banners,mod_data: data[0]});
                    }
                   });
                 }
              });
            break;
            case 'del':
            db.query(`DELETE FROM banner_table WHERE ID=${req.query.id}`,(err,data)=>{
             if(err){
              console.log(err);//调试
              res.status(500).send('database error').end();      
             }else{
                res.redirect('/admin/banners');//数据删除依然重新redirect
             }
            });
            break;
            default://默认正常渲染
            db.query(`SELECT * FROM banner_table`,(err,data)=>{
            if(err){
             res.status(500).send('database error').end();
            }else{
             // console.log(banners);
             res.render('admin/banners.ejs',{banners:data})
            }
       });
       }  
     });
     router.post('/',(req,res)=>{
     
       var content=req.body.content;
       var first_title=req.body.first_title;
       var second_title=req.body.second_title;
			 var third_title=req.body.third_title;
        //做校验
        if(!content || !first_title || !second_title || !third_title){
            res.status(400).send('arg error').end();
        }else{//数据检查通过
             if(req.body.mod_id){//修改
               db.query(`UPDATE banner_table SET \
                content='${req.body.content}',\
                first_title='${req.body.first_title}',\
                second_title='${req.body.second_title}',\
								third_title='${req.body.third_title}'\
                WHERE ID=${req.body.mod_id}`,
                (err,data)=>{
                    if(err){
                       res.status(500).send('database error').end();
                    }else{
                    res.redirect('/admin/banners');
                    }
               });
             }else{//添加
             db.query(`INSERT INTO banner_table (content,first_title,second_title,third_title) VALUE('${content}','${first_title}','${second_title}','${third_title}')`,(err,data)=>{
             if(err){
               res.status(500).send('database error').end();
             }else{
             // res.send('ok了').end();
             res.redirect('/admin/banners');
             }
            });
            } 
        } 
     });

	return router;
}





 