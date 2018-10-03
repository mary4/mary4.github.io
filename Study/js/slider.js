//array of images
var sliderMasive = ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpeg', 'img/pic4.jpg', 'img/pic5.jpg'];
var slideCount = sliderMasive.length;

function createSlider(sliderMasive, sliderId) {
    var sliders = '';
    var bar = '';
    $('[id="' + sliderId + '"]').append('<div id="slider-body"><div id="sliders_ribbon"></div></div>');
    for (var i = 0; i < slideCount; i++) {
        sliders += '<div class="slide" circle-id="circle-' + i + '" id="slide-' + i + '"><img src="' + sliderMasive[i] + '" alt=""></div> ';
        bar += '<div class="circle" slide-id="slide-' + i + '" id="circle-' + i + '"></div>';
    }
    $('#sliders_ribbon').append(sliders);
    $('[id="' + sliderId + '"]').append('<div class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>');
    $('[id="' + sliderId + '"]').append('<div class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>');
    $('[id="' + sliderId + '"]').append('<div id="bar"></div>');
    $('#bar').append(bar);
}

function showSlide(n) {
    $('.circle').removeClass('active_circle');
    $('#circle-' + n + '').addClass('active_circle');
    if (n < slideCount) {
        $('.slide').addClass('hide');
        $('[id="slide-' + n + '"]').removeClass('hide');
        $('.left-arrow').removeClass('disabled');
        $('.right-arrow').removeClass('disabled');
    }
    if (n == 0) {
        $('.left-arrow').addClass('disabled');
    }
    if (n == slideCount - 1) {
        $('.right-arrow').addClass('disabled');
    }
}

function currentSlide() {
    var currentSlideId = $('.slide').not('.hide').attr('id');
    idNumber = currentSlideId[currentSlideId.length - 1];
    console.log(idNumber);
    return idNumber;
}

$(function () {
    createSlider(sliderMasive, 's-slider');
    showSlide(0);

    $("body").on('click', '.right-arrow', function () {
        var id = currentSlide()*1;
        if (id < slideCount - 1) {
            id += 1;
            showSlide(id);
        }
    })

    $("body").on('click', '.left-arrow', function () {
        var id = currentSlide();
        if (id > 0) {
            id -= 1;
            showSlide(id);
        }
    })

    $("body").on('click', '.circle', function () {
        var thisCircleId = $(this).attr('id');
        circleId = thisCircleId[thisCircleId.length - 1];
        showSlide(circleId);
        var id = currentSlide();
    })


})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9hcnJheSBvZiBpbWFnZXNcclxudmFyIHNsaWRlck1hc2l2ZSA9IFsnaW1nL3BpYzEuanBnJywgJ2ltZy9waWMyLmpwZycsICdpbWcvcGljMy5qcGVnJywgJ2ltZy9waWM0LmpwZycsICdpbWcvcGljNS5qcGcnXTtcclxudmFyIHNsaWRlQ291bnQgPSBzbGlkZXJNYXNpdmUubGVuZ3RoO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2xpZGVyKHNsaWRlck1hc2l2ZSwgc2xpZGVySWQpIHtcclxuICAgIHZhciBzbGlkZXJzID0gJyc7XHJcbiAgICB2YXIgYmFyID0gJyc7XHJcbiAgICAkKCdbaWQ9XCInICsgc2xpZGVySWQgKyAnXCJdJykuYXBwZW5kKCc8ZGl2IGlkPVwic2xpZGVyLWJvZHlcIj48ZGl2IGlkPVwic2xpZGVyc19yaWJib25cIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgc2xpZGVycyArPSAnPGRpdiBjbGFzcz1cInNsaWRlXCIgY2lyY2xlLWlkPVwiY2lyY2xlLScgKyBpICsgJ1wiIGlkPVwic2xpZGUtJyArIGkgKyAnXCI+PGltZyBzcmM9XCInICsgc2xpZGVyTWFzaXZlW2ldICsgJ1wiIGFsdD1cIlwiPjwvZGl2PiAnO1xyXG4gICAgICAgIGJhciArPSAnPGRpdiBjbGFzcz1cImNpcmNsZVwiIHNsaWRlLWlkPVwic2xpZGUtJyArIGkgKyAnXCIgaWQ9XCJjaXJjbGUtJyArIGkgKyAnXCI+PC9kaXY+JztcclxuICAgIH1cclxuICAgICQoJyNzbGlkZXJzX3JpYmJvbicpLmFwcGVuZChzbGlkZXJzKTtcclxuICAgICQoJ1tpZD1cIicgKyBzbGlkZXJJZCArICdcIl0nKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJsZWZ0LWFycm93XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+Jyk7XHJcbiAgICAkKCdbaWQ9XCInICsgc2xpZGVySWQgKyAnXCJdJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwicmlnaHQtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+Jyk7XHJcbiAgICAkKCdbaWQ9XCInICsgc2xpZGVySWQgKyAnXCJdJykuYXBwZW5kKCc8ZGl2IGlkPVwiYmFyXCI+PC9kaXY+Jyk7XHJcbiAgICAkKCcjYmFyJykuYXBwZW5kKGJhcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTbGlkZShuKSB7XHJcbiAgICAkKCcuY2lyY2xlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9jaXJjbGUnKTtcclxuICAgICQoJyNjaXJjbGUtJyArIG4gKyAnJykuYWRkQ2xhc3MoJ2FjdGl2ZV9jaXJjbGUnKTtcclxuICAgIGlmIChuIDwgc2xpZGVDb3VudCkge1xyXG4gICAgICAgICQoJy5zbGlkZScpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgJCgnW2lkPVwic2xpZGUtJyArIG4gKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKCcubGVmdC1hcnJvdycpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICQoJy5yaWdodC1hcnJvdycpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKG4gPT0gMCkge1xyXG4gICAgICAgICQoJy5sZWZ0LWFycm93JykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAobiA9PSBzbGlkZUNvdW50IC0gMSkge1xyXG4gICAgICAgICQoJy5yaWdodC1hcnJvdycpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjdXJyZW50U2xpZGUoKSB7XHJcbiAgICB2YXIgY3VycmVudFNsaWRlSWQgPSAkKCcuc2xpZGUnKS5ub3QoJy5oaWRlJykuYXR0cignaWQnKTtcclxuICAgIGlkTnVtYmVyID0gY3VycmVudFNsaWRlSWRbY3VycmVudFNsaWRlSWQubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zb2xlLmxvZyhpZE51bWJlcik7XHJcbiAgICByZXR1cm4gaWROdW1iZXI7XHJcbn1cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgY3JlYXRlU2xpZGVyKHNsaWRlck1hc2l2ZSwgJ3Mtc2xpZGVyJyk7XHJcbiAgICBzaG93U2xpZGUoMCk7XHJcblxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgJy5yaWdodC1hcnJvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaWQgPSBjdXJyZW50U2xpZGUoKSoxO1xyXG4gICAgICAgIGlmIChpZCA8IHNsaWRlQ291bnQgLSAxKSB7XHJcbiAgICAgICAgICAgIGlkICs9IDE7XHJcbiAgICAgICAgICAgIHNob3dTbGlkZShpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCAnLmxlZnQtYXJyb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlkID0gY3VycmVudFNsaWRlKCk7XHJcbiAgICAgICAgaWYgKGlkID4gMCkge1xyXG4gICAgICAgICAgICBpZCAtPSAxO1xyXG4gICAgICAgICAgICBzaG93U2xpZGUoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgJy5jaXJjbGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRoaXNDaXJjbGVJZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICBjaXJjbGVJZCA9IHRoaXNDaXJjbGVJZFt0aGlzQ2lyY2xlSWQubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgc2hvd1NsaWRlKGNpcmNsZUlkKTtcclxuICAgICAgICB2YXIgaWQgPSBjdXJyZW50U2xpZGUoKTtcclxuICAgIH0pXHJcblxyXG5cclxufSkiXSwiZmlsZSI6InNsaWRlci5qcyJ9
