(function ($) {
	"use strict";

    $(document).ready(function($){

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        $('[data-toggle="tooltip"]').tooltip();

		//Fixed nav on scroll
		$(document).on('scroll',function(e){
			var scrollTop = $(document).scrollTop();
			if(scrollTop > $('nav').height()){
				$('.navbar-default').removeClass('navbar-default').addClass('navbar-fixed-top');
				$('#logo1').attr('src', 'images/logo-black.png');
			}
			else {
				$('.navbar-fixed-top').removeClass('navbar-fixed-top').addClass('navbar-default');
				$('#logo1').attr('src', 'images/logo-white.png');
			}
		});
		
		$(document).on('scroll',function(e){
			var scrollTop = $(document).scrollTop();
			if(scrollTop > $('nav').height()){
				$('.navbar-static').removeClass('navbar-default').addClass('navbar-fixed-top2');
			}
			else {
				$('.navbar-fixed-top2').removeClass('navbar-fixed-top2').addClass('navbar-static');
			}
		});
		
		//Tab Items
		$('#about-tab a').on('click',function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		})        
		
		//Progress bar
		$('.progress .progress-bar').progressbar();
		
		//Portfolio Popup
		$('.magnific-popup').magnificPopup({type:'image'});

    });


    $(window).on('load',function(){

        
    });


}(jQuery));	