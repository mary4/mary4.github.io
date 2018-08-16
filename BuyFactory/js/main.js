$(function() {

	$('.header_big_button').click(function(e) {
		$('.header_big_button').removeClass('active_big_button');
		$(e.target).addClass('active_big_button');
	});


	$('.slider-jumbo').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	  // autoplay: true,
	  // autoplaySpeed: 3000,
	  arrows: false,
	  dots: true,
	  fade: true,
	  infinite: true
	});


	$('.carusel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		centerMode: true,
		variableWidth: true

	});

	$('.discount-carusel').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		rows: 2,
		responsive: [
		{
			breakpoint: 770,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
			}
		}]
	});




	// $('#accordion').accordion(
	// {
	// 	collapsible: true,
	// 	active: true,
	// 	heightStyle: "content"
	// });




 // $('.#accordion>div').not(':first-of-type').hide();

 // $('#accordion>h3').click(function(){
 // 	var findArticle = $(this).next();
 // 	var findWrapper = $(this).closest('#accordion');
 // 	if(findArticle.is(':visible')){
 // 		findArticle.slideUp('fast');
 // 	}
 // 	else{
 // 		findArticle.slideDown('fast');
 // 	}

 //
$('.filter_title').not('.active').next().hide();

$('.filter_title').on('click', function() {
	$(this).next('.filter_content').slideToggle();
	$(this).toggleClass('active');
	
	$('.filter_title').not(this).next('.filter_content').slideUp().removeClass('active');
	$('.filter_title').not(this).removeClass('active')
});

	var value_first = 75;
	var value_second = 250;

	$('.slider_form').on('change', function() {
		value_first = $("#min-amount").val();
		value_second = $("#max-amount").val();
	
			if(value_first*1>value_second*1)
			{
				value_first=value_second;
			}
				if(value_second*1 < value_first*1){
				value_second=value_first;
			}

		$( "#slider-range" ).slider({
			values: [ value_first, value_second ]
		});

	$( "#min-amount" ).val(value_first);
	$( "#max-amount" ).val(value_second);

	});

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ value_first, value_second ],
		slide: function( event, ui ) {
			$( "#min-amount" ).val(ui.values[ 0 ] );
			$( "#max-amount" ).val(ui.values[ 1 ] );

		}
	});
	$( "#min-amount" ).val(value_first);
	$( "#max-amount" ).val(value_second);
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdCQoJy5oZWFkZXJfYmlnX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdCQoJy5oZWFkZXJfYmlnX2J1dHRvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmVfYmlnX2J1dHRvbicpO1xyXG5cdFx0JChlLnRhcmdldCkuYWRkQ2xhc3MoJ2FjdGl2ZV9iaWdfYnV0dG9uJyk7XHJcblx0fSk7XHJcblxyXG5cclxuXHQkKCcuc2xpZGVyLWp1bWJvJykuc2xpY2soe1xyXG5cdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0ICAvLyBhdXRvcGxheTogdHJ1ZSxcclxuXHQgIC8vIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcblx0ICBhcnJvd3M6IGZhbHNlLFxyXG5cdCAgZG90czogdHJ1ZSxcclxuXHQgIGZhZGU6IHRydWUsXHJcblx0ICBpbmZpbml0ZTogdHJ1ZVxyXG5cdH0pO1xyXG5cclxuXHJcblx0JCgnLmNhcnVzZWwnKS5zbGljayh7XHJcblx0XHRzbGlkZXNUb1Nob3c6IDUsXHJcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdGFycm93czogdHJ1ZSxcclxuXHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0Y2VudGVyTW9kZTogdHJ1ZSxcclxuXHRcdHZhcmlhYmxlV2lkdGg6IHRydWVcclxuXHJcblx0fSk7XHJcblxyXG5cdCQoJy5kaXNjb3VudC1jYXJ1c2VsJykuc2xpY2soe1xyXG5cdFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRhcnJvd3M6IGZhbHNlLFxyXG5cdFx0ZG90czogdHJ1ZSxcclxuXHRcdGZhZGU6IGZhbHNlLFxyXG5cdFx0aW5maW5pdGU6IHRydWUsXHJcblx0XHRyb3dzOiAyLFxyXG5cdFx0cmVzcG9uc2l2ZTogW1xyXG5cdFx0e1xyXG5cdFx0XHRicmVha3BvaW50OiA3NzAsXHJcblx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdGluZmluaXRlOiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH1dXHJcblx0fSk7XHJcblxyXG5cclxuXHJcblxyXG5cdC8vICQoJyNhY2NvcmRpb24nKS5hY2NvcmRpb24oXHJcblx0Ly8ge1xyXG5cdC8vIFx0Y29sbGFwc2libGU6IHRydWUsXHJcblx0Ly8gXHRhY3RpdmU6IHRydWUsXHJcblx0Ly8gXHRoZWlnaHRTdHlsZTogXCJjb250ZW50XCJcclxuXHQvLyB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAvLyAkKCcuI2FjY29yZGlvbj5kaXYnKS5ub3QoJzpmaXJzdC1vZi10eXBlJykuaGlkZSgpO1xyXG5cclxuIC8vICQoJyNhY2NvcmRpb24+aDMnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gLy8gXHR2YXIgZmluZEFydGljbGUgPSAkKHRoaXMpLm5leHQoKTtcclxuIC8vIFx0dmFyIGZpbmRXcmFwcGVyID0gJCh0aGlzKS5jbG9zZXN0KCcjYWNjb3JkaW9uJyk7XHJcbiAvLyBcdGlmKGZpbmRBcnRpY2xlLmlzKCc6dmlzaWJsZScpKXtcclxuIC8vIFx0XHRmaW5kQXJ0aWNsZS5zbGlkZVVwKCdmYXN0Jyk7XHJcbiAvLyBcdH1cclxuIC8vIFx0ZWxzZXtcclxuIC8vIFx0XHRmaW5kQXJ0aWNsZS5zbGlkZURvd24oJ2Zhc3QnKTtcclxuIC8vIFx0fVxyXG5cclxuIC8vXHJcbiQoJy5maWx0ZXJfdGl0bGUnKS5ub3QoJy5hY3RpdmUnKS5uZXh0KCkuaGlkZSgpO1xyXG5cclxuJCgnLmZpbHRlcl90aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdCQodGhpcykubmV4dCgnLmZpbHRlcl9jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcclxuXHQkKCcuZmlsdGVyX3RpdGxlJykubm90KHRoaXMpLm5leHQoJy5maWx0ZXJfY29udGVudCcpLnNsaWRlVXAoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCgnLmZpbHRlcl90aXRsZScpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxufSk7XHJcblxyXG5cdHZhciB2YWx1ZV9maXJzdCA9IDc1O1xyXG5cdHZhciB2YWx1ZV9zZWNvbmQgPSAyNTA7XHJcblxyXG5cdCQoJy5zbGlkZXJfZm9ybScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdHZhbHVlX2ZpcnN0ID0gJChcIiNtaW4tYW1vdW50XCIpLnZhbCgpO1xyXG5cdFx0dmFsdWVfc2Vjb25kID0gJChcIiNtYXgtYW1vdW50XCIpLnZhbCgpO1xyXG5cdFxyXG5cdFx0XHRpZih2YWx1ZV9maXJzdCoxPnZhbHVlX3NlY29uZCoxKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFsdWVfZmlyc3Q9dmFsdWVfc2Vjb25kO1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0aWYodmFsdWVfc2Vjb25kKjEgPCB2YWx1ZV9maXJzdCoxKXtcclxuXHRcdFx0XHR2YWx1ZV9zZWNvbmQ9dmFsdWVfZmlyc3Q7XHJcblx0XHRcdH1cclxuXHJcblx0XHQkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlcih7XHJcblx0XHRcdHZhbHVlczogWyB2YWx1ZV9maXJzdCwgdmFsdWVfc2Vjb25kIF1cclxuXHRcdH0pO1xyXG5cclxuXHQkKCBcIiNtaW4tYW1vdW50XCIgKS52YWwodmFsdWVfZmlyc3QpO1xyXG5cdCQoIFwiI21heC1hbW91bnRcIiApLnZhbCh2YWx1ZV9zZWNvbmQpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0JCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoe1xyXG5cdFx0cmFuZ2U6IHRydWUsXHJcblx0XHRtaW46IDAsXHJcblx0XHRtYXg6IDUwMCxcclxuXHRcdHZhbHVlczogWyB2YWx1ZV9maXJzdCwgdmFsdWVfc2Vjb25kIF0sXHJcblx0XHRzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuXHRcdFx0JCggXCIjbWluLWFtb3VudFwiICkudmFsKHVpLnZhbHVlc1sgMCBdICk7XHJcblx0XHRcdCQoIFwiI21heC1hbW91bnRcIiApLnZhbCh1aS52YWx1ZXNbIDEgXSApO1xyXG5cclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCBcIiNtaW4tYW1vdW50XCIgKS52YWwodmFsdWVfZmlyc3QpO1xyXG5cdCQoIFwiI21heC1hbW91bnRcIiApLnZhbCh2YWx1ZV9zZWNvbmQpO1xyXG59KSJdLCJmaWxlIjoibWFpbi5qcyJ9
