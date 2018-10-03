$(function () {

  // active state for menu
  $(".main_menu li").on('click', function () {
    $(".main_menu li").removeClass("active");
    $(this).addClass("active");
  });

  //tooltip for menu 
  var aWidth;
  $(".main_menu li a").mouseover(function () {
    aWidth = $(this).innerWidth();
    $(this).siblings(".tooltip").css({ "left": (aWidth + 5), "display": "block" });
  });

  $(".main_menu li a").mouseout(function () {
    $(this).siblings(".tooltip").css({ "display": "none" });
  });


  // menu 
  $('.tab_link').on('click', function () {
    var tab = $(this).attr('data-tab');
    $('.part').hide();
    $('.part[id="' + tab + '"]').show();
    //or
    // $('.context').children('#'+tab).show();


  });

  ///menu adding in the main block in menuAdditing.js




  ///date split

  var date;
  var dateToParts;
  var dayToParts;
  var timeToParts;

  $("#date").keyup(function (e) {
    date = $(this).val();
    dateToParts = date.split(' ');

    dayToParts = dateToParts[0].split('.');
    $('#day').val(dayToParts[0]);
    $('#month').val(dayToParts[1]);
    $('#year').val(dayToParts[2]);

    if (dateToParts[1]) {
      timeToParts = dateToParts[1].split(':');
      $('#hour').val(timeToParts[0]);
      $('#minutes').val(timeToParts[1]);
    } else { $('#hour').val(''); }

  });

  //reset data 
  $("body").on('click', '.reset', function () {
    $('.date input').val('');
  });

  // reset data in form
  $('#m-date').on('click', function () {
    $('#dateCalc').trigger('reset');
  });

  // for  moving blocks that form picture
  $('.block').draggable({
    grid: [94, 141]
  });

  //animation

  function moveCube(x, callback) {
    console.log(x.length);
    for (i = 0; i < x.length; i++) {
      $('div[id="' + x[i] + '"]').animate({ left: '80%' });
      $('div[id="' + x[i] + '"]').animate({ left: '' });
    }
    if (callback && typeof (callback) === "function") {
      callback();
    }
  }

  $('#start_animation').on('click', function () {

    setTimeout(function () { moveCube(['cube1', 'cube2', 'cube3']) }, 2000);
    setTimeout(function () { moveCube(['cube2', 'cube3']) }, 1000);
    moveCube(['cube3']);

    //try callback
    /*moveCube(['cube3'], 
    function(){moveCube(['cube2','cube3'], function(){moveCube(['cube1','cube2','cube3'])})});
    */

  });

  //chess
  var numberOfcells = 8;

  //display letters abc
  var htmlBuilder = "";
  for (var i = 0; i < numberOfcells; i++) {
    htmlBuilder += '<div class="chess-text1">' + String.fromCharCode(65 + i) + '</div>';
  }
  $('#letters').append(htmlBuilder);

  //display numbers 876
  htmlBuilder = "";
  for (var i = numberOfcells; i > 0; i--) {
    htmlBuilder += '<div class="chess-text2">' + i + '</div>';
  }
  $('#numbers').append(htmlBuilder);

  //display chess board
  var temp = "";
  for (var i = 1; i <= numberOfcells; i++) {
    temp = '<div class="chess-row">';
    for (var j = 1; j <= numberOfcells; j++) {
      if ((i + j) % 2 == 0) {
        temp += '<div ind-i="' + i + '" ind-j="' + j + '"  id="cell_' + i + '_' + j + '" class="chess-cell black-cell"></div>';
      } else {
        temp += '<div ind-i="' + i + '" ind-j="' + j + '"  id="cell_' + i + '_' + j + '" class="chess-cell white-cell"></div>';
      }
    }
    // temp += '<div class="clearfix"></div></div>';
    $('#chessbox').append(temp);
    temp = "";
  }

  //////////////////////////
/*
  $("body").on("click", '.chess-cell', function () {
    var indI = $(this).attr('ind-i');
    var indJ = $(this).attr('ind-j');
    console.log(indI + " " + indJ)
  });
*/
  /////////////////////////

  $('#chessbox').append('<div id="chess-item"></div>');
  $('#chess-item').draggable({
    grid: [50, 50]
  });

  function changeCoordinates(letter, number) {
    var x, y;
    var code = letter.charCodeAt(0);
    if (code >= 65 && code < 65 + numberOfcells) {
      x = code - 64;
    } else { x = 0; }
    if (number.match(/[1-8]/i)) {
      y = 9 - number;
    } else { y = 0; }
    return [x, y];
  }

  function moveToXY(el, x, y) {
    var cell = $('.chess-cell[id="cell_' + x + '_' + y + '"]');
    var positionOfCell = cell.position();
    el.animate({ left: positionOfCell.top, top: positionOfCell.left });
  }

  var inputValue;
  var indexX, indexY;
  var newCoord
  var chessItem = $('#chess-item');
  $('#new-position').keyup(function () {
    inputValue = $(this).val().replace(/\s+/g, '').replace(/[-]+/g, '').trim().toUpperCase();
    if (inputValue.length > 2) {
      $(this).val('');
    }

    if (inputValue != 0 && inputValue[0].match(/[A-H]/i)) {
      indexX = inputValue[0];
      if (isFinite(inputValue[1]) && inputValue[1].match(/[1-8]/i)) {
        indexY = inputValue[1];
        newCoord = changeCoordinates(indexX, indexY)
        moveToXY(chessItem, newCoord[0], newCoord[1]);
      } 
      else if (inputValue[1] && inputValue[1].match(/[0,9]/i)) {
        alert('enter number between 1 and 8 including');
      }
    } else {
      $(this).val('');
      // indexX = "";
      // indexY = "";
    }

  })



})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAvLyBhY3RpdmUgc3RhdGUgZm9yIG1lbnVcclxuICAkKFwiLm1haW5fbWVudSBsaVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLm1haW5fbWVudSBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIC8vdG9vbHRpcCBmb3IgbWVudSBcclxuICB2YXIgYVdpZHRoO1xyXG4gICQoXCIubWFpbl9tZW51IGxpIGFcIikubW91c2VvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgIGFXaWR0aCA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xyXG4gICAgJCh0aGlzKS5zaWJsaW5ncyhcIi50b29sdGlwXCIpLmNzcyh7IFwibGVmdFwiOiAoYVdpZHRoICsgNSksIFwiZGlzcGxheVwiOiBcImJsb2NrXCIgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIubWFpbl9tZW51IGxpIGFcIikubW91c2VvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5zaWJsaW5ncyhcIi50b29sdGlwXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vIG1lbnUgXHJcbiAgJCgnLnRhYl9saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRhYiA9ICQodGhpcykuYXR0cignZGF0YS10YWInKTtcclxuICAgICQoJy5wYXJ0JykuaGlkZSgpO1xyXG4gICAgJCgnLnBhcnRbaWQ9XCInICsgdGFiICsgJ1wiXScpLnNob3coKTtcclxuICAgIC8vb3JcclxuICAgIC8vICQoJy5jb250ZXh0JykuY2hpbGRyZW4oJyMnK3RhYikuc2hvdygpO1xyXG5cclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vL21lbnUgYWRkaW5nIGluIHRoZSBtYWluIGJsb2NrIGluIG1lbnVBZGRpdGluZy5qc1xyXG5cclxuXHJcblxyXG5cclxuICAvLy9kYXRlIHNwbGl0XHJcblxyXG4gIHZhciBkYXRlO1xyXG4gIHZhciBkYXRlVG9QYXJ0cztcclxuICB2YXIgZGF5VG9QYXJ0cztcclxuICB2YXIgdGltZVRvUGFydHM7XHJcblxyXG4gICQoXCIjZGF0ZVwiKS5rZXl1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgZGF0ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBkYXRlVG9QYXJ0cyA9IGRhdGUuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBkYXlUb1BhcnRzID0gZGF0ZVRvUGFydHNbMF0uc3BsaXQoJy4nKTtcclxuICAgICQoJyNkYXknKS52YWwoZGF5VG9QYXJ0c1swXSk7XHJcbiAgICAkKCcjbW9udGgnKS52YWwoZGF5VG9QYXJ0c1sxXSk7XHJcbiAgICAkKCcjeWVhcicpLnZhbChkYXlUb1BhcnRzWzJdKTtcclxuXHJcbiAgICBpZiAoZGF0ZVRvUGFydHNbMV0pIHtcclxuICAgICAgdGltZVRvUGFydHMgPSBkYXRlVG9QYXJ0c1sxXS5zcGxpdCgnOicpO1xyXG4gICAgICAkKCcjaG91cicpLnZhbCh0aW1lVG9QYXJ0c1swXSk7XHJcbiAgICAgICQoJyNtaW51dGVzJykudmFsKHRpbWVUb1BhcnRzWzFdKTtcclxuICAgIH0gZWxzZSB7ICQoJyNob3VyJykudmFsKCcnKTsgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgLy9yZXNldCBkYXRhIFxyXG4gICQoXCJib2R5XCIpLm9uKCdjbGljaycsICcucmVzZXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuZGF0ZSBpbnB1dCcpLnZhbCgnJyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIHJlc2V0IGRhdGEgaW4gZm9ybVxyXG4gICQoJyNtLWRhdGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjZGF0ZUNhbGMnKS50cmlnZ2VyKCdyZXNldCcpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBmb3IgIG1vdmluZyBibG9ja3MgdGhhdCBmb3JtIHBpY3R1cmVcclxuICAkKCcuYmxvY2snKS5kcmFnZ2FibGUoe1xyXG4gICAgZ3JpZDogWzk0LCAxNDFdXHJcbiAgfSk7XHJcblxyXG4gIC8vYW5pbWF0aW9uXHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVDdWJlKHgsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zb2xlLmxvZyh4Lmxlbmd0aCk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKCdkaXZbaWQ9XCInICsgeFtpXSArICdcIl0nKS5hbmltYXRlKHsgbGVmdDogJzgwJScgfSk7XHJcbiAgICAgICQoJ2RpdltpZD1cIicgKyB4W2ldICsgJ1wiXScpLmFuaW1hdGUoeyBsZWZ0OiAnJyB9KTtcclxuICAgIH1cclxuICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgKGNhbGxiYWNrKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkKCcjc3RhcnRfYW5pbWF0aW9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBtb3ZlQ3ViZShbJ2N1YmUxJywgJ2N1YmUyJywgJ2N1YmUzJ10pIH0sIDIwMDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IG1vdmVDdWJlKFsnY3ViZTInLCAnY3ViZTMnXSkgfSwgMTAwMCk7XHJcbiAgICBtb3ZlQ3ViZShbJ2N1YmUzJ10pO1xyXG5cclxuICAgIC8vdHJ5IGNhbGxiYWNrXHJcbiAgICAvKm1vdmVDdWJlKFsnY3ViZTMnXSwgXHJcbiAgICBmdW5jdGlvbigpe21vdmVDdWJlKFsnY3ViZTInLCdjdWJlMyddLCBmdW5jdGlvbigpe21vdmVDdWJlKFsnY3ViZTEnLCdjdWJlMicsJ2N1YmUzJ10pfSl9KTtcclxuICAgICovXHJcblxyXG4gIH0pO1xyXG5cclxuICAvL2NoZXNzXHJcbiAgdmFyIG51bWJlck9mY2VsbHMgPSA4O1xyXG5cclxuICAvL2Rpc3BsYXkgbGV0dGVycyBhYmNcclxuICB2YXIgaHRtbEJ1aWxkZXIgPSBcIlwiO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZjZWxsczsgaSsrKSB7XHJcbiAgICBodG1sQnVpbGRlciArPSAnPGRpdiBjbGFzcz1cImNoZXNzLXRleHQxXCI+JyArIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKSArICc8L2Rpdj4nO1xyXG4gIH1cclxuICAkKCcjbGV0dGVycycpLmFwcGVuZChodG1sQnVpbGRlcik7XHJcblxyXG4gIC8vZGlzcGxheSBudW1iZXJzIDg3NlxyXG4gIGh0bWxCdWlsZGVyID0gXCJcIjtcclxuICBmb3IgKHZhciBpID0gbnVtYmVyT2ZjZWxsczsgaSA+IDA7IGktLSkge1xyXG4gICAgaHRtbEJ1aWxkZXIgKz0gJzxkaXYgY2xhc3M9XCJjaGVzcy10ZXh0MlwiPicgKyBpICsgJzwvZGl2Pic7XHJcbiAgfVxyXG4gICQoJyNudW1iZXJzJykuYXBwZW5kKGh0bWxCdWlsZGVyKTtcclxuXHJcbiAgLy9kaXNwbGF5IGNoZXNzIGJvYXJkXHJcbiAgdmFyIHRlbXAgPSBcIlwiO1xyXG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IG51bWJlck9mY2VsbHM7IGkrKykge1xyXG4gICAgdGVtcCA9ICc8ZGl2IGNsYXNzPVwiY2hlc3Mtcm93XCI+JztcclxuICAgIGZvciAodmFyIGogPSAxOyBqIDw9IG51bWJlck9mY2VsbHM7IGorKykge1xyXG4gICAgICBpZiAoKGkgKyBqKSAlIDIgPT0gMCkge1xyXG4gICAgICAgIHRlbXAgKz0gJzxkaXYgaW5kLWk9XCInICsgaSArICdcIiBpbmQtaj1cIicgKyBqICsgJ1wiICBpZD1cImNlbGxfJyArIGkgKyAnXycgKyBqICsgJ1wiIGNsYXNzPVwiY2hlc3MtY2VsbCBibGFjay1jZWxsXCI+PC9kaXY+JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0ZW1wICs9ICc8ZGl2IGluZC1pPVwiJyArIGkgKyAnXCIgaW5kLWo9XCInICsgaiArICdcIiAgaWQ9XCJjZWxsXycgKyBpICsgJ18nICsgaiArICdcIiBjbGFzcz1cImNoZXNzLWNlbGwgd2hpdGUtY2VsbFwiPjwvZGl2Pic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHRlbXAgKz0gJzxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKCcjY2hlc3Nib3gnKS5hcHBlbmQodGVtcCk7XHJcbiAgICB0ZW1wID0gXCJcIjtcclxuICB9XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8qXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnLmNoZXNzLWNlbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaW5kSSA9ICQodGhpcykuYXR0cignaW5kLWknKTtcclxuICAgIHZhciBpbmRKID0gJCh0aGlzKS5hdHRyKCdpbmQtaicpO1xyXG4gICAgY29uc29sZS5sb2coaW5kSSArIFwiIFwiICsgaW5kSilcclxuICB9KTtcclxuKi9cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoJyNjaGVzc2JveCcpLmFwcGVuZCgnPGRpdiBpZD1cImNoZXNzLWl0ZW1cIj48L2Rpdj4nKTtcclxuICAkKCcjY2hlc3MtaXRlbScpLmRyYWdnYWJsZSh7XHJcbiAgICBncmlkOiBbNTAsIDUwXVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VDb29yZGluYXRlcyhsZXR0ZXIsIG51bWJlcikge1xyXG4gICAgdmFyIHgsIHk7XHJcbiAgICB2YXIgY29kZSA9IGxldHRlci5jaGFyQ29kZUF0KDApO1xyXG4gICAgaWYgKGNvZGUgPj0gNjUgJiYgY29kZSA8IDY1ICsgbnVtYmVyT2ZjZWxscykge1xyXG4gICAgICB4ID0gY29kZSAtIDY0O1xyXG4gICAgfSBlbHNlIHsgeCA9IDA7IH1cclxuICAgIGlmIChudW1iZXIubWF0Y2goL1sxLThdL2kpKSB7XHJcbiAgICAgIHkgPSA5IC0gbnVtYmVyO1xyXG4gICAgfSBlbHNlIHsgeSA9IDA7IH1cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlVG9YWShlbCwgeCwgeSkge1xyXG4gICAgdmFyIGNlbGwgPSAkKCcuY2hlc3MtY2VsbFtpZD1cImNlbGxfJyArIHggKyAnXycgKyB5ICsgJ1wiXScpO1xyXG4gICAgdmFyIHBvc2l0aW9uT2ZDZWxsID0gY2VsbC5wb3NpdGlvbigpO1xyXG4gICAgZWwuYW5pbWF0ZSh7IGxlZnQ6IHBvc2l0aW9uT2ZDZWxsLnRvcCwgdG9wOiBwb3NpdGlvbk9mQ2VsbC5sZWZ0IH0pO1xyXG4gIH1cclxuXHJcbiAgdmFyIGlucHV0VmFsdWU7XHJcbiAgdmFyIGluZGV4WCwgaW5kZXhZO1xyXG4gIHZhciBuZXdDb29yZFxyXG4gIHZhciBjaGVzc0l0ZW0gPSAkKCcjY2hlc3MtaXRlbScpO1xyXG4gICQoJyNuZXctcG9zaXRpb24nKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpbnB1dFZhbHVlID0gJCh0aGlzKS52YWwoKS5yZXBsYWNlKC9cXHMrL2csICcnKS5yZXBsYWNlKC9bLV0rL2csICcnKS50cmltKCkudG9VcHBlckNhc2UoKTtcclxuICAgIGlmIChpbnB1dFZhbHVlLmxlbmd0aCA+IDIpIHtcclxuICAgICAgJCh0aGlzKS52YWwoJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbnB1dFZhbHVlICE9IDAgJiYgaW5wdXRWYWx1ZVswXS5tYXRjaCgvW0EtSF0vaSkpIHtcclxuICAgICAgaW5kZXhYID0gaW5wdXRWYWx1ZVswXTtcclxuICAgICAgaWYgKGlzRmluaXRlKGlucHV0VmFsdWVbMV0pICYmIGlucHV0VmFsdWVbMV0ubWF0Y2goL1sxLThdL2kpKSB7XHJcbiAgICAgICAgaW5kZXhZID0gaW5wdXRWYWx1ZVsxXTtcclxuICAgICAgICBuZXdDb29yZCA9IGNoYW5nZUNvb3JkaW5hdGVzKGluZGV4WCwgaW5kZXhZKVxyXG4gICAgICAgIG1vdmVUb1hZKGNoZXNzSXRlbSwgbmV3Q29vcmRbMF0sIG5ld0Nvb3JkWzFdKTtcclxuICAgICAgfSBcclxuICAgICAgZWxzZSBpZiAoaW5wdXRWYWx1ZVsxXSAmJiBpbnB1dFZhbHVlWzFdLm1hdGNoKC9bMCw5XS9pKSkge1xyXG4gICAgICAgIGFsZXJ0KCdlbnRlciBudW1iZXIgYmV0d2VlbiAxIGFuZCA4IGluY2x1ZGluZycpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnZhbCgnJyk7XHJcbiAgICAgIC8vIGluZGV4WCA9IFwiXCI7XHJcbiAgICAgIC8vIGluZGV4WSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gIH0pXHJcblxyXG5cclxuXHJcbn0pIl0sImZpbGUiOiJtYWluLmpzIn0=
