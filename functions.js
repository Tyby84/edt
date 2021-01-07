$(document).ready(function(){

    $('.menu-bar').click(function() {
        $('.nav__mobile').toggleClass('nav__mobile--shown');
        $('.menu-bar').toggleClass('menu-bar--close');
    });
    $('.egy').click(function() {
        $('.table').css("display", "none");
        $('#one').css("display", "block");
        $('page-link').attr('href', '#egy').parent(".page-item").addClass('active');
    });
    $('.ketto').click(function() {
        $('table').css("display", "none");
        $('#two ').css("display", "block");
        $('page-link').attr('href', '#ketto').parent(".page-item").addClass('active');
    });
    $('.harom').click(function() {
        $('table').css("display", "none");
        $('#three ').css("display", "block");
    });
    $('.negy').click(function() {
        $('table').css("display", "none");
        $('#four').css("display", "block");
    });
    $('.ot').click(function() {
        $('table').css("display", "none");
        $('#five').css("display", "block");
    });
    $('.hat').click(function() {
        $('table').css("display", "none");
        $('#six').css("display", "block");
    });
  });