(function ($) {
	"use strict";

	// fixed menu js
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$("#header-fixed-height").removeClass("active-height");

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$("#header-fixed-height").addClass("active-height");
		}
	});


	// Magnific popup js
	$(".parent-container").magnificPopup({
		delegate: ".gallery-popup",
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	// video popup js
	$('.vidplay').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
			},
			srcAction: 'iframe_src',
		}
	});

	// blog one image change js
	$(document).ready(function () {
		$('.blog-item').hover(function () {
			$('.blog-item').removeClass('blog-active');
			$(this).addClass('blog-active');
		});
	});


	// // Client feedback slider js
	// $(".client-feedback-slider").slick({
	// 	slidesToShow: 2,
	// 	slidesToScroll: 1,
	// 	autoplay: false,
	// 	dots: false,
	// 	infinite: true,
	// 	arrows: true,
	// 	speed: 500,
	// 	prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
	// 	nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
	// 	responsive: [{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 		}
	// 	}]
	// });

	// Mobile menu js start
	$(".mobile-topbar .bars").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
		return false;
	});

	$(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
	});

	$(".sub-mobile-menu ul").hide();
	$(".sub-mobile-menu a").on("click", function () {
		$(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
		$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	});
})(jQuery);