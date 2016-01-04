var selectedLink;
var lastSelected;
$('.topmenudiv').hover( function () {
    if(! lastSelected) {
        selectedLink = $('.topmenudiv').find(".selected");
        lastSelected = selectedLink;
        $(selectedLink).toggleClass('selected');
    }
    else {
        $(lastSelected).toggleClass('selected');
    }
});

$('li').mouseleave( function () {
    $(this).find('a').removeClass('selected');
});/**
 * Created by schno on 10/6/2015.
 */
