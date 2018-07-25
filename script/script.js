$('.list-hours li').eq(new Date().getDay()).addClass('today');


$(document).ready(function () {

    $('.drop-menu').click(function () {
        $('#nav-menu').toggleClass('active');

    });
    
    $('.list-hours li').eq(new Date().getDay()).addClass('today');
});
