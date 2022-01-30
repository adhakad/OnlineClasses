(function () {
	
	'use strict';
	var owlCarousel = function(){
		
		var owl2 = $('.owl-carousel-fullwidth-product');
		owl2.owlCarousel({
			stagePadding:80,
			items: 3,
			loop: true,
            dots:false,
			margin: 25,
			
		});
	};
	$(function(){ 
		owlCarousel();	
	});     
}());