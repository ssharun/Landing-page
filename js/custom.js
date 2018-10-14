$(function(){

	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});
	}

	$(window).bind('load resize', hf);

});

$(function(){

	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(400)
	})

	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	$('.banner-slider, .testimonial-slider').slick({
		arrows:false,
		dots:true,
	});

	$('.portfolio-slider').slick({
		dots:true,
		appendArrows: '.portfolio-slider__buttons',
		prevArrow: '<button type="button" class="slick-prev"><span class="icon-chevron-thin-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="icon-chevron-thin-right"></span></button>',
		responsive: [{
			breakpoint: 767,
			settings: {
				dots: false,
			}
		}
		]
	});

	$nav_tabs_slider = $('.nav-tab-list');
	settings = {
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><span class="icon-chevron-thin-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="icon-chevron-thin-right"></span></button>',
		infinite: false, //прокрутка
	}

	$nav_tabs_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).find('.slick-current').siblings().removeClass('active');
		var id = $(this).find('.slick-current a').attr('href');
		$(id).removeClass('hide');
		$(this).find('.slick-current').addClass('active');
		return false
	})

	$(window).on('resize load', function(){
		if($(window).width() >767) {
			if($nav_tabs_slider.hasClass('slick-initialized')) {
				$nav_tabs_slider.slick('unslick')
			}
			return
		}
		if(!$nav_tabs_slider.hasClass('slick-initialized')) {
			return $nav_tabs_slider.slick(settings)
		}
	})
});
function initMap() {
	var coordinates = {
		lat: -37.806086,
		lng: 144.961291
	},
	markerImg = 'img/marker.png',

	map = new google.maps.Map(document.getElementById('map'), {
		center: coordinates,
		zoom: 16,
		disableDefaultUI: true,
		scrollwheel: false,
	});

	marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		animation: google.maps.Animation.BOUNCE,
		icon: markerImg,
	});
}

google.maps.event.addDomListener(window,'load', initMap); 


