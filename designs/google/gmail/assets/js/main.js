$(function () {

    /*cache the window object*/

    var $window = $(window);
////
    //parallex backgrond effect
    $('section[data-type="background"]').each(function () {

        var $bgobj = $(this);
        $(window).scroll(function () {

            var ypos = ($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50%' + ypos + 'px';
            //Move Background
            $bgobj.css({backgroundPosition: coords});
        });
    })
});