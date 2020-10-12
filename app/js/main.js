$(function () {

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "13px",
		ratedFill: "#ffc000",
		readOnly: true,
		spacing: "4px",
	});
	$(".rate-stars").rateYo({
		rating: 5,
		starWidth: "10px",
		ratedFill: "#ffc000",
		readOnly: true,
		spacing: "4px",
	});

	$('.features-products__slider').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.arrows__btn--left'),
		nextArrow: $('.arrows__btn--right'),
	});

	$('.card-slider__box').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: $('.btn-left'),
		nextArrow: $('.btn-right'),
		responsive: [
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		],

	});
	$('.clients__box').slick({
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: $('.clients__arrow-left'),
		nextArrow: $('.clients__arrow-right'),
		responsive: [
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	});

	$('.btn-clients__all').on('click', function () {
		$('.clients__item-all').addClass('clients__item__show');
		$('.btn-clients__all').addClass('btn-clients__hiden');
		$('.btn-clients__hide').addClass('btn-clients__show');
		$('.btn-clients__all').removeClass('btn-clients__show')
	});

	$('.header__burger').on('click', function () {
		$('.header__menu,.header__burger').toggleClass('active');
	});

	var mixer = mixitup('.products__box');
});