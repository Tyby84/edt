$(document).ready(function() {
    /* Mobil menu megjelenites, zaras */ 
    $('.menu-bar').click(function() {
        $('.nav__mobile').toggleClass('nav__mobile--shown');
        $('.menu-bar').toggleClass('menu-bar--close');
    });
    /* Pagination mukodes */ 
    let link = $('.page-item');
    let table = $('table');
    link.click(function() {
        table.css("display", "none");
        let item = $(this).children("a").attr("id");
        $("table" + "#" + item).css("display", "block");

        $(link).removeClass('active');
        $(this).addClass('active');
    });
    /* Zaszlok - nemet, angol nyelvu bemutatkozas*/
    $('.german').click(function() {
        $('.nemetOldal').toggleClass('latszik');
    });

    $('.brit').click(function() {
        $('.angol').toggleClass('latszik');
    });
    
  });