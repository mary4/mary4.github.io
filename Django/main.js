$(document).ready(function(){
	$('.portfolio-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
	  // fade: true,
	  infinite: true,
	  responsive: [
	  {
	  	breakpoint: 1125,
	  	settings: {
	  		slidesToShow: 3,
	  		slidesToScroll: 1,
	  		infinite: true
	  	}
	  },
	  {
	  	breakpoint: 680,
	  	settings: {
	  		slidesToShow: 2,
	  		slidesToScroll: 1,
	  		infinite: true
	  	}
	  },
	  {
	  	breakpoint: 540,
	  	settings: {
	  		slidesToShow: 1,
	  		slidesToScroll: 1,
	  		infinite: true
	  	}
	  }
	  ]
	});

	$('.client-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		// centerMode: true,
		// centerPadding: '60px',
		infinite: true,
		responsive: [
		{
			breakpoint: 1125,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true
			}
		},
		{
			breakpoint: 680,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true
			}
		},
		{
			breakpoint: 540,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
			}
		}
		]
	});
})