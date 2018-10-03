$(function () {

    function createNewItemToMenu() {
        var result = '<li>';
        result += '<div class="item-title ">New menu item</div>';
        result += ' <div class="change-item-title hide"><input type="text"> <button class="confirm-change">Save</button></div>';
        result += ' <button class="y-n add"><img src="img/add.png" alt=""> </button> <button class="y-n delete"><img src="img/remove.png" alt=""></button>';
        result += '</li>'
        return result;
    }

    //create li
    $("#create-new-item").on('click', function () {
        var newMenu = $(this).attr('data');
        $('[id="' + newMenu + '"]').append(createNewItemToMenu());
    })

    //delete li
    $("body").on('click', '.delete', function () {
        $(this).closest("li").remove();
    })

    // click on the title to show input and enter new title
    $("body").on('click', '.item-title', function () {
        $(this).toggleClass('hide');
        $(this).siblings('.change-item-title').toggleClass('hide');
    })

    // click to confirm change of the title and return to display title
    $("body").on('click', '.confirm-change', function () {
        var newName = $(this).siblings('input').val();
        var li = $(this).closest('li');
        if (newName.trim() != '') {
            li.children('.item-title').text(newName);
        }
        li.children('.item-title').toggleClass('hide');
        li.children('.change-item-title').toggleClass('hide');
    })

    //create inner li 
    $("body").on('click', '.add', function () {
        var li = $(this).closest('li');
        var newLi = createNewItemToMenu();
        li.append('<ul>'+ newLi +'</ul>');
    })

})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtZW51QWRkaXRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3SXRlbVRvTWVudSgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJzxsaT4nO1xyXG4gICAgICAgIHJlc3VsdCArPSAnPGRpdiBjbGFzcz1cIml0ZW0tdGl0bGUgXCI+TmV3IG1lbnUgaXRlbTwvZGl2Pic7XHJcbiAgICAgICAgcmVzdWx0ICs9ICcgPGRpdiBjbGFzcz1cImNoYW5nZS1pdGVtLXRpdGxlIGhpZGVcIj48aW5wdXQgdHlwZT1cInRleHRcIj4gPGJ1dHRvbiBjbGFzcz1cImNvbmZpcm0tY2hhbmdlXCI+U2F2ZTwvYnV0dG9uPjwvZGl2Pic7XHJcbiAgICAgICAgcmVzdWx0ICs9ICcgPGJ1dHRvbiBjbGFzcz1cInktbiBhZGRcIj48aW1nIHNyYz1cImltZy9hZGQucG5nXCIgYWx0PVwiXCI+IDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVwieS1uIGRlbGV0ZVwiPjxpbWcgc3JjPVwiaW1nL3JlbW92ZS5wbmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nO1xyXG4gICAgICAgIHJlc3VsdCArPSAnPC9saT4nXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvL2NyZWF0ZSBsaVxyXG4gICAgJChcIiNjcmVhdGUtbmV3LWl0ZW1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuZXdNZW51ID0gJCh0aGlzKS5hdHRyKCdkYXRhJyk7XHJcbiAgICAgICAgJCgnW2lkPVwiJyArIG5ld01lbnUgKyAnXCJdJykuYXBwZW5kKGNyZWF0ZU5ld0l0ZW1Ub01lbnUoKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vZGVsZXRlIGxpXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCAnLmRlbGV0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS5yZW1vdmUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gY2xpY2sgb24gdGhlIHRpdGxlIHRvIHNob3cgaW5wdXQgYW5kIGVudGVyIG5ldyB0aXRsZVxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgJy5pdGVtLXRpdGxlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuY2hhbmdlLWl0ZW0tdGl0bGUnKS50b2dnbGVDbGFzcygnaGlkZScpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBjbGljayB0byBjb25maXJtIGNoYW5nZSBvZiB0aGUgdGl0bGUgYW5kIHJldHVybiB0byBkaXNwbGF5IHRpdGxlXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCAnLmNvbmZpcm0tY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuZXdOYW1lID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS52YWwoKTtcclxuICAgICAgICB2YXIgbGkgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJyk7XHJcbiAgICAgICAgaWYgKG5ld05hbWUudHJpbSgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGxpLmNoaWxkcmVuKCcuaXRlbS10aXRsZScpLnRleHQobmV3TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpLmNoaWxkcmVuKCcuaXRlbS10aXRsZScpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgbGkuY2hpbGRyZW4oJy5jaGFuZ2UtaXRlbS10aXRsZScpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vY3JlYXRlIGlubmVyIGxpIFxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgJy5hZGQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xyXG4gICAgICAgIHZhciBuZXdMaSA9IGNyZWF0ZU5ld0l0ZW1Ub01lbnUoKTtcclxuICAgICAgICBsaS5hcHBlbmQoJzx1bD4nKyBuZXdMaSArJzwvdWw+Jyk7XHJcbiAgICB9KVxyXG5cclxufSkiXSwiZmlsZSI6Im1lbnVBZGRpdGluZy5qcyJ9
