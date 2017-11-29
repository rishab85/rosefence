$(function(){

	// scrollbar js initialization
	$(".nano").nanoScroller();


	// Window Width/Height
	wwwh = function(){
		ww = $(window).width();
		wh = $(window).height();
	}
	wwwh();

	// Window Resize Orientation Change
	$(window).bind('resize orientationchange',function(){
		wwwh();
	})


	//navigatino height-fix

	// $('.header').load("nav.html");

    $(".last-child").css('margin-right',0+'px')
        

	$('.carousel').carousel();

	var mtop = $('.header').outerHeight();
	var sh = $('.secondary-nav').outerHeight()-2;
	var fH = mtop-sh;
	console.log(mtop-sh);
	$('.primary-nav-list li').css('line-height',fH+'px')
	$('body').css('padding-top',mtop+'px');

	$('.table-cell').css('margin-top',mtop+"px");
	
	
	var sliderH = $('.mytable').height();
	$('.caption').css('height',sliderH+'px');

	var captionW = $('.caption').width();
	var captionWrapper = $('.caption-wrapper').width();
	var marginL = (captionW/2)-(captionWrapper/2);
	$('.caption-wrapper').css('margin-left',marginL+'px');

	var captionH = $('.caption').height();
	var captionWrapperH = $('.caption-wrapper').height();
	var marginT = (captionH/2) - (captionWrapperH/2);
	$('.caption-wrapper').css('margin-top',marginT+'px');

	var op = $('#p-services').attr('bg-opacity');
	var iop = parseInt(op)/100;
	$('#p-services').css('background-color','rgba('+119+','+18+','+22+','+iop+')');

	var solutionW = $('.solution-wrapper').width();
	var viewbtnW = $('.view-btn').outerWidth();

	var viewbtn_ML = (solutionW/2)-(viewbtnW/2);
	$('.view-btn').css('margin-left',viewbtn_ML+'px');

	$('.solution-main').hover(function(){
		$(this).addClass('active-main');
	},function(){
		$(this).removeClass('active-main');
	})

	// $('p').hover(function(){
	// 	$(this).children('span').addClass('animated').addClass('bounceIn');
	// },function(){$(this).children('span').removeClass('animated').removeClass('bounceIn')});



	// testomonial carousel
	
	 $(".owl-carousel").owlCarousel({
	 nav:true,
    // you can use jQuery selector
    navText: ["left","right"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
	});

	 $('.owl-nav').hide();

	 $('#left-a').click(function(){
	 	$('.owl-prev').trigger('click');
	 });

	 $('#right-a').click(function(){
	 	$('.owl-next').trigger('click');
	 });

	 $('#left-a').addClass('disable-arrow');

	 $('.owl-arrows').click(function(){
	if($('.owl-prev').hasClass('disabled')){
		$('#left-a').addClass('disable-arrow');
	}else if($('.owl-next').hasClass('disabled')){
		$('#right-a').addClass('disable-arrow');
	}else{
		$('.owl-arrows').removeClass('disable-arrow');
	}
	});


	// hover function dropdown
	$('.dropdown-sub li').hover(function(){
	$(this).addClass('active');
	},function(){
	$(this).removeClass('active');	
	});


	function hideallDropdown(){
	var h = $('.dropdown').outerHeight()+25;
	$('.dropdown-wrapper').css('top','-'+h+'px');
	}

	// function showDropdown(dropdown){
	// 	var dpos = $('.header').height()-25;
	// 	$('.dropdown-wrapper').css({'z-index':880,'top':dpos+'px'});
	// }


	hideallDropdown();

	// $('.aboutus').hover(function(){

	// 	showDropdown();
	// },function(){
	// 	var h = $('.dropdown').outerHeight();
	// 	$('.dropdown-wrapper').css({'top':'-'+h+'px','z-index':880});
	// });

	function hideDropdown(dropdown){
	var h = $('.dropdown').outerHeight()+25;
	$('#'+dropdown).css({'top':'-'+h+'px','z-index':880});
	}

	function showDropdown(dropdown){
		var dpos = $('.header').height()-25;
		$('#'+dropdown).css({'z-index':881,'top':dpos+'px','position':'fixed'});
	}

	$('.menu-connected').hover(function(){
		var did=$(this).attr("dropdown");
		$('.'+did).addClass('active');
		showDropdown(did);
	},function(){
		
		var h = $('.dropdown').outerHeight();
		var did=$(this).attr("dropdown");
		$('.'+did).removeClass('active');
		$('.dropdown-wrapper').css({'top':'-'+h+'px','z-index':880,'position':'absolute'});
	});


	// promotion hide and show
	$('.dropdown-wrapper').each(function(){
		var check = $(this).attr('promotion');
		if(check=="false"){
			$(this).find('.promotion-wrap').addClass('hidden');
			
		}else{
			$(this).children('.dropdown').css('border-bottom',0+'px');
			var pDIv = $(this).find('.promotion-wrap');
		}
		
	})


	$('.img-change').hover(function(){
		var cimg=$(this).attr("connected-img");
		$('.services-img').addClass('hidden').removeClass('animated').removeClass('fadeIn');
		$('.'+cimg).removeClass('hidden').addClass('animated').addClass('fadeIn');
	});
	// $('.primary-nav-list li').hover(function(){
	// $('.dropdown').css('top',0+'px');
	// console.log('hello');
	// });


	// slider height fix

	var sliderHeight = $('.sliderH').height();
	$('.slider').height(sliderHeight);

});