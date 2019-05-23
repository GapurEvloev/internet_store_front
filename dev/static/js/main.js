$(document).ready(function () {
	svg4everybody({});

	//Активация кнопки(бургер/sandwich) в каталоге start
	var sandwich = function () {
		$(document).on('click', '.sandwich', function () {
			$(this).toggleClass('sandwich--active');
	
		});
	};
	//Активация кнопки(бургер/sandwich) в каталоге end

	//slider in section popular categiries start
	var popularCategoriesSlider = function () {
		if($(window).width() < 768) {
			$('.js-categories-prev').slick({
				slidesToShow: 2,
				slidesToScroll: 1
			}) 
		}
	};
	//slider in section popular categiries end

	//slider in section "You see" start
	var productPrevSlider = function () {
		var sliderCount = $('.product-slider__count'),
			prodSlider = $('.js-product-slider');

		//счетчик слайдов в слайдере начало
		prodSlider.on('init afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 4;
			sliderCount.text('Слайд ' + i + ' из ' + slick.slideCount);
		});
		//счетчик слайдов в слайдере конец

		//настройки слайдера "вы смотрели" начало
		prodSlider.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '.slider-nav--prev',
			nextArrow: '.slider-nav--next',
			infinite: false
		})
		//настройки слайдера "вы смотрели" конец
	}
	//slider in section "You see" end

	//инициализация
	sandwich();
	popularCategoriesSlider();
	productPrevSlider();
});

//slider in section popular categiries start with resize
var popularCategoriesSlider = function () {
	var sliderElement = $('.js-categories-prev');
	if($(window).width() < 768 && !(sliderElement.hasClass('slick-initialized'))) {
		$('.js-categories-prev').slick({
			slidesToShow: 2,
			slidesToScroll: 1
		}) 
	} 
	else if ($(window).width() > 768 && sliderElement.hasClass('slick-initialized')) {
		sliderElement.slick('unslick');
	}
};
//slider in section popular categiries start with resize end

//resize init start
$(window).on('resize', function () {
	popularCategoriesSlider();
})
//resize init end