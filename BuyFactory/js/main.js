$(function() {

	$('.horizontal_items').hide();
	$('.item_vertical').addClass('active');


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


$('.basic-single').select2({
	// placeholder: "Popularity",
	minimumResultsForSearch: Infinity,
	width: 'resolve'
});
	


var container = $('.sort_item');
$('.sort_item').on('click', function(){
	$(this).children().children().children('.select2-selection').toggleClass('active');

});
//
$(document).mouseup(function (e){
	var div = $('.sort_item'); 
	if (!div.is(e.target) && div.has(e.target).length === 0) { 
		$('.select2-selection').removeClass('active');
	}
});

$('.item_horizontal').on('click', function(){
	$('.horizontal_items').show();
	$('.vertical_items').hide();
	$(this).addClass('active');
	$('.item_vertical').removeClass('active');
});

$('.item_vertical').on('click', function(){
	$('.horizontal_items').hide();
	$('.vertical_items').show();
	$(this).addClass('active');
	$('.item_horizontal').removeClass('active');

});






});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdCQoJy5ob3Jpem9udGFsX2l0ZW1zJykuaGlkZSgpO1xyXG5cdCQoJy5pdGVtX3ZlcnRpY2FsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHJcblx0JCgnLmhlYWRlcl9iaWdfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0JCgnLmhlYWRlcl9iaWdfYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9iaWdfYnV0dG9uJyk7XHJcblx0XHQkKGUudGFyZ2V0KS5hZGRDbGFzcygnYWN0aXZlX2JpZ19idXR0b24nKTtcclxuXHR9KTtcclxuXHJcblxyXG5cclxuXHJcblx0JCgnLnNsaWRlci1qdW1ibycpLnNsaWNrKHtcclxuXHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdCAgLy8gYXV0b3BsYXk6IHRydWUsXHJcblx0ICAvLyBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG5cdCAgYXJyb3dzOiBmYWxzZSxcclxuXHQgIGRvdHM6IHRydWUsXHJcblx0ICBmYWRlOiB0cnVlLFxyXG5cdCAgaW5maW5pdGU6IHRydWVcclxuXHR9KTtcclxuXHJcblxyXG5cdCQoJy5jYXJ1c2VsJykuc2xpY2soe1xyXG5cdFx0c2xpZGVzVG9TaG93OiA1LFxyXG5cdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRhcnJvd3M6IHRydWUsXHJcblx0XHRpbmZpbml0ZTogdHJ1ZSxcclxuXHRcdGNlbnRlck1vZGU6IHRydWUsXHJcblx0XHR2YXJpYWJsZVdpZHRoOiB0cnVlXHJcblxyXG5cdH0pO1xyXG5cclxuXHQkKCcuZGlzY291bnQtY2FydXNlbCcpLnNsaWNrKHtcclxuXHRcdHNsaWRlc1RvU2hvdzogMixcclxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0YXJyb3dzOiBmYWxzZSxcclxuXHRcdGRvdHM6IHRydWUsXHJcblx0XHRmYWRlOiBmYWxzZSxcclxuXHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0cm93czogMixcclxuXHRcdHJlc3BvbnNpdmU6IFtcclxuXHRcdHtcclxuXHRcdFx0YnJlYWtwb2ludDogNzcwLFxyXG5cdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0XHRpbmZpbml0ZTogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9XVxyXG5cdH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHQvLyAkKCcjYWNjb3JkaW9uJykuYWNjb3JkaW9uKFxyXG5cdC8vIHtcclxuXHQvLyBcdGNvbGxhcHNpYmxlOiB0cnVlLFxyXG5cdC8vIFx0YWN0aXZlOiB0cnVlLFxyXG5cdC8vIFx0aGVpZ2h0U3R5bGU6IFwiY29udGVudFwiXHJcblx0Ly8gfSk7XHJcblxyXG5cclxuICQoJy5maWx0ZXJfdGl0bGUnKS5ub3QoJy5hY3RpdmUnKS5uZXh0KCkuaGlkZSgpO1xyXG5cclxuICQoJy5maWx0ZXJfdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuIFx0JCh0aGlzKS5uZXh0KCcuZmlsdGVyX2NvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiBcdCQoJy5maWx0ZXJfdGl0bGUnKS5ub3QodGhpcykubmV4dCgnLmZpbHRlcl9jb250ZW50Jykuc2xpZGVVcCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuIFx0JCgnLmZpbHRlcl90aXRsZScpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuIH0pO1xyXG5cclxuIHZhciB2YWx1ZV9maXJzdCA9IDc1O1xyXG4gdmFyIHZhbHVlX3NlY29uZCA9IDI1MDtcclxuXHJcbiAkKCcuc2xpZGVyX2Zvcm0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiBcdHZhbHVlX2ZpcnN0ID0gJChcIiNtaW4tYW1vdW50XCIpLnZhbCgpO1xyXG4gXHR2YWx1ZV9zZWNvbmQgPSAkKFwiI21heC1hbW91bnRcIikudmFsKCk7XHJcblxyXG4gXHRpZih2YWx1ZV9maXJzdCoxPnZhbHVlX3NlY29uZCoxKVxyXG4gXHR7XHJcbiBcdFx0dmFsdWVfZmlyc3Q9dmFsdWVfc2Vjb25kO1xyXG4gXHR9XHJcbiBcdGlmKHZhbHVlX3NlY29uZCoxIDwgdmFsdWVfZmlyc3QqMSl7XHJcbiBcdFx0dmFsdWVfc2Vjb25kPXZhbHVlX2ZpcnN0O1xyXG4gXHR9XHJcblxyXG4gXHQkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlcih7XHJcbiBcdFx0dmFsdWVzOiBbIHZhbHVlX2ZpcnN0LCB2YWx1ZV9zZWNvbmQgXVxyXG4gXHR9KTtcclxuXHJcbiBcdCQoIFwiI21pbi1hbW91bnRcIiApLnZhbCh2YWx1ZV9maXJzdCk7XHJcbiBcdCQoIFwiI21heC1hbW91bnRcIiApLnZhbCh2YWx1ZV9zZWNvbmQpO1xyXG5cclxuIH0pO1xyXG5cclxuICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKHtcclxuIFx0cmFuZ2U6IHRydWUsXHJcbiBcdG1pbjogMCxcclxuIFx0bWF4OiA1MDAsXHJcbiBcdHZhbHVlczogWyB2YWx1ZV9maXJzdCwgdmFsdWVfc2Vjb25kIF0sXHJcbiBcdHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gXHRcdCQoIFwiI21pbi1hbW91bnRcIiApLnZhbCh1aS52YWx1ZXNbIDAgXSApO1xyXG4gXHRcdCQoIFwiI21heC1hbW91bnRcIiApLnZhbCh1aS52YWx1ZXNbIDEgXSApO1xyXG5cclxuIFx0fVxyXG4gfSk7XHJcbiAkKCBcIiNtaW4tYW1vdW50XCIgKS52YWwodmFsdWVfZmlyc3QpO1xyXG4gJCggXCIjbWF4LWFtb3VudFwiICkudmFsKHZhbHVlX3NlY29uZCk7XHJcblxyXG5cclxuJCgnLmJhc2ljLXNpbmdsZScpLnNlbGVjdDIoe1xyXG5cdC8vIHBsYWNlaG9sZGVyOiBcIlBvcHVsYXJpdHlcIixcclxuXHRtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXHJcblx0d2lkdGg6ICdyZXNvbHZlJ1xyXG59KTtcclxuXHRcclxuXHJcblxyXG52YXIgY29udGFpbmVyID0gJCgnLnNvcnRfaXRlbScpO1xyXG4kKCcuc29ydF9pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbignLnNlbGVjdDItc2VsZWN0aW9uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxufSk7XHJcbi8vXHJcbiQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpe1xyXG5cdHZhciBkaXYgPSAkKCcuc29ydF9pdGVtJyk7IFxyXG5cdGlmICghZGl2LmlzKGUudGFyZ2V0KSAmJiBkaXYuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHsgXHJcblx0XHQkKCcuc2VsZWN0Mi1zZWxlY3Rpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fVxyXG59KTtcclxuXHJcbiQoJy5pdGVtX2hvcml6b250YWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQoJy5ob3Jpem9udGFsX2l0ZW1zJykuc2hvdygpO1xyXG5cdCQoJy52ZXJ0aWNhbF9pdGVtcycpLmhpZGUoKTtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHQkKCcuaXRlbV92ZXJ0aWNhbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKCcuaXRlbV92ZXJ0aWNhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCgnLmhvcml6b250YWxfaXRlbXMnKS5oaWRlKCk7XHJcblx0JCgnLnZlcnRpY2FsX2l0ZW1zJykuc2hvdygpO1xyXG5cdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQoJy5pdGVtX2hvcml6b250YWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
