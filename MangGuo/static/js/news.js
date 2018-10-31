jQuery.noConflict();
jQuery(function($){
	// 滚动监听
	$(window).scroll(function(){
		if($(window).width() >= 992){
			if($(window).scrollTop() == 0){
				$("nav.navbar").css("top","28px");
				$(".navbar-brand").hide();
				$(".headerpar").stop().animate({"top":"-225px"},800);
			}else{
				$("nav.navbar").css("top","0px");
				$(".navbar-brand").show();
				$(".headerpar").stop().animate({"top":"-420px"},800);
			}
		}else{
			$(".navbar-brand").show();
			$("nav.navbar").css("top","0px");
		}
		if($(window).scrollTop() > 900){
			$(".return").show();
		}else{
			$(".return").hide();
		}
	})
	// 导航条内嵌小菜单控制
		$(".navbar .hashover").hover(function(){
			if(($(window).width() >= 992)){
				if($(".hashover>div").is(":hidden"))
					$(".hashover>div").show();
				$(".hashover").css({"background":"#333"});
				$(".hashover>a").css({"color":"#ffffff"});
				$(".hashover>div").animate({"height":"160px"},30);
				$(".hashover>div>a").animate({"margin-left":"0px"},600);
			}else{
				$(".hashover").css({"background":"#333"});
				$(".hashover>a").css({"color":"#ffffff"});
			}
		},function(){
			if(($(window).width() >= 992)){
				$(".hashover>div").delay(600).animate({"height":"0px"},30);
				$(".hashover>div>a").delay(600).animate({"margin-left":"-70px"},30);
				setTimeout(function(){
					$(".hashover").css({"background":"#ffff00"});
					$(".hashover>a").css({"color":"#777"});
				},600);
			}else{
				$(".hashover").css({"background":"#535353"});
				$(".hashover>a").css({"color":"#777"});
			}
		})
		$(".hashover").click(function(){
			if(($(window).width() < 768)){
				if ($(".hashover>div").height() == 0) {
					$(".hashover>div").css("height","160px");
					$(".hashover>div>a").css({"margin-left":"0px"});
				};
				$(".hashover>div").slideToggle(300);
			}
		})
		$(".navbar-nav>li:not(:eq(1))").hover(function(){
			if(($(window).width() < 768)){
				setTimeout(function(){$(".hashover>div").slideUp(300)},700);
			};
		})
		$(".ctmain .moreArticle").click(function(e){
			$(".ctmain dl:last").show();
			$(this).hide();
			return false;
		})
	//出现二维码
	$(".saomashow>span,.saomashow>img").hover(function(){
		$(".saomashow>img").stop().show(400);
	},function(){
		$(".saomashow>img").stop().hide(400);
	})
	// 回到顶部
	$(".return").click(function(){
		 $("html,body").animate({scrollTop:0},600);
	})

})