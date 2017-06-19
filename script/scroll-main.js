$(function(){
	if($(window).scrollTop() > $('welcome').offset().top){
		$('#nav').addClass('fixed-nav');
	}else{
		$('#nav').removeClass('fixed-nav');
	}
	
	$(window).scroll(function(){
		if($(this).scrollTop() > $('#welcome').offset().top){
			$('#nav').addClass('fixed-nav');
		}else{
			$('#nav').removeClass('fixed-nav');
		}
	});
});