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
    $('.close').click(function() {
        $('.flags').css('display', 'none');
    });
    $('.german').click(function() {
        $('.flags').css('display', 'block');
        $('.nemetOldal').addClass('latszik');
        $('.angol').removeClass('latszik');
        
    });

    $('.brit').click(function() {
        $('.flags').css('display', 'block');
        $('.angol').addClass('latszik');
        $('.nemetOldal').removeClass('latszik');
       
    });
    
    
  });