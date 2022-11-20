new Swiper('.image-slider', {
	centeredSlides: true,
	loop: true,
	slideToClickedSlide: true,
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},
	speed: 750,
	breakpoints: {
		993: {
			slidesPerView: 1.75,
			spaceBetween: 200
		}
	}
});

