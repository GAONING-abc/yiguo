$(function(){
	//手机易果
	$(".mobile").hover(function(){
		$(this).addClass("current");
	},function(){
		$(this).removeClass("current")
	})
	//我的易果
	$('.myyiguo').hover(function(){
		$(this).addClass('current')
	},function(){
		$(this).removeClass('current')
	})

})