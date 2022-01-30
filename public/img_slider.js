(function () {
	
	'use strict';
	var owlCarousel = function(){
		
		var owl2 = $('.owl-carousel-fullwidth');
		owl2.owlCarousel({
			stagePadding:0,
			items: 1,
			loop: true,
            dots:true,
			margin: 0,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			
		});
	};
	$(function(){
		owlCarousel();	
	});     
}());