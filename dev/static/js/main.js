$(document).ready(function () {
	svg4everybody({});

	//Активация кнопки(бургер/sandwich) в каталоге start
	var sandwich = function () {
		$(document).on('click', '.catalog-nav__header', function () {
			var sandwich = $(this).find('.sandwich'),
				catalog  = $(this).parent();

			sandwich.toggleClass('sandwich--active');
			catalog.toggleClass('catalog-nav--active');
	
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
	};
	//slider in section "You see" end

	//выпадающие блоки каталога при наведении начало
	var catalorNavHover = function () {
		$('.catalog-nav__item').hover(
			function() {
				var catalogBody = $(this).closest('.catalog-nav__body');

				catalogBody.css('width', 825);
			},
			function() {
				var catalogBody = $(this).closest('.catalog-nav__body');

				catalogBody.css('width', 'auto');
			}
		);
	};
	// выпадающие блоки каталога при наведении конец

	// Подтверждение и выбор города начало
	var locationChoose = function() {
		$(document).on('click','.location-question__btn',function() {
			var answer = $(this).data('location');
			
			$(this).closest('.location-question').hide();

			if(answer === 'no'){
				$(this).closest('.location__body').addClass('is-location-choose');
			}
		});

		$(document).on('click','.location-choose__item',function() {
			$(this).closest('.location__body').removeClass('is-location-choose');
		});

		$(document).on('click','.location__header',function() {
			$(this).siblings('.location__body').addClass('is-location-choose');
		});
	};
	// Подтверждение и выбор города конец

	// попап-окно
	var popupLink = function() {
		$('.js-popup-link').magnificPopup({
			showCloseBtn: false
		});

		$(document).on('click','.popup__close', function() {
			$.magnificPopup.close();
		});
	};

	
	// $(".file-upload input[type=file]").change(function(){
	// 	let filename = $(this).val().replace(/.*\\/, "");
	// 	$(this).closest('.file-upload').find('.file-upload__text').html(filename);
	// });

	//валидация форм начало
	var formValidate = function () {
		$('form').each(function () {
			$(this).on('submit', function () {
				$(this).validate({
					rules: {
						name: 'required',
						phone: 'required',
						password: 'required',
						req_textarea: 'required'
					},
					messages: {
						name: 'Введите корректное имя',
						phone: 'Введите корректный номер',
						password: 'Введите корректный пароль',
						req_textarea: 'Заполните поле'
					},
					errorPlacement: function(error, element) {
						element.attr("placeholder", error[0].outerText);
					}
				});
				if($(this).valid()) {
					var wrap = $(this)[0].closest('.hide-on-success');

					if (wrap) {
						$(wrap).siblings('.show-on-success').show();
						$(wrap).hide();
					}
				}
				return false;
			})
		});
	};
	//валидация форм конец

	//вызов функций
	sandwich();
	popularCategoriesSlider();
	productPrevSlider();
	catalorNavHover();
	locationChoose();
	popupLink();
	formValidate();
});

//slider in section popular categiries start with resize
var popularCategoriesSlider = function () {
	var sliderElement = $('.js-categories-prev');
	if($(window).width() < 768 && !(sliderElement.hasClass('slick-initialized'))) {
		$('.js-categories-prev').slick({
			slidesToShow: 2,
			slidesToScroll: 1
		}); 
	} 
	else if ($(window).width() > 768 && sliderElement.hasClass('slick-initialized')) {
		sliderElement.slick('unslick');
	}
};
//slider in section popular categiries start with resize end

//resize init start
$(window).on('resize', function () {
	popularCategoriesSlider();
});
//resize init end