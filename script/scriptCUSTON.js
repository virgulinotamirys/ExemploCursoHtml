/* NAV MOBILE */
$(function() {

	var bodyEl = $('html'),
		navToggleBtn = bodyEl.find('.nav-toggle-btn');

	navToggleBtn.on('click', function(e) {
		bodyEl.toggleClass('active-nav');
		e.preventDefault();
	});

	var menuBtn = $('a.menu-btn'),
		menuBtnBlock = menuBtn.find('div.menu-btn-block');

	menuBtn.on('click', function() {
		menuBtnBlock.toggleClass('active');
	});

	$('.menu-principal > ul > li > a').click(function() {
		$('.menu-princispal > ul > li > a').not(this).addClass("visible");
		$(this).toggleClass('visible');
		if($(this).attr("href")=="#"||$(this).attr("href")==""){
			return false;
		}
	});

	$('.nav-toggle-btn').click(function() {  /* MENU NAV MOBILE */
		$('.nav-toggle-btn').not(this).addClass("visible");
		$(this).toggleClass('visible');
		if($(this).attr("href")=="#"||$(this).attr("href")==""){
			return false;
		}
	});
	$('.menu-nav nav ul li a').click(function() {  /* MENU NAV MOBILE */
		$('.nav-toggle-btn').not(this).addClass("visible");
		$(this).toggleClass('visible');
		if($(this).attr("href")=="#"||$(this).attr("href")==""){
			return false;
		}
	});

});


/*
$(function(){
		var url =  window.location.pathname;
		$( ".menu-static ul > li" ).each(function( index, value ) {
	    	//depuração
			//console.log( url);
			if( $(this).children().attr("href") == url){
		    	$(this).children().addClass("select");
		    }
		});
});
*/



$(document).ready(function() {
	// addClass rolagem Custom*
	var nav = $('.menu-static');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 40) {
			nav.addClass("fixoActive fadeInDown");
		} else {
			nav.removeClass("fixoActive fadeInDown");
		}
	});
});
