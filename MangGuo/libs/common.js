const crypto=require('crypto');

module.exports={
	MD5_SUFFIX:'asfdadsa%%%%77&&&&ffdfffd',//md5后缀
	md5:function(str){
		var obj=crypto.createHash('md5');//创建对象

            obj.update(str);//给数据
            return obj.digest('hex');
	}
}



