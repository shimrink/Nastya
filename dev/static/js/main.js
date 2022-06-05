$(document).ready(function () {
    svg4everybody({});
});

$('.faq__answer').slideUp(500);
// show and hide faq-block
$('.faq__name').click(function(){
    var id=$(this).attr('id');
    $('.faq__answer').slideUp(500);
    if(!$(this).hasClass('faq__name_active')){
        $('.faq__name').removeClass('faq__name_active');
        $(this).addClass('faq__name_active');
        $('#faqAnswer_'+id).slideDown(500);
        $('.faq__svg').removeClass('faq__svg_opened');
        $('#faqSvg_'+id).addClass('faq__svg_opened');
        $('#faqSvg_'+id).css('transition', 'transform 0.3s');
    } else {
        $('.faq__name').removeClass('faq__name_active');
        $('#faqSvg_'+id).removeClass('faq__svg_opened');
        $('#faqSvg_'+id).css('transition', 'transform 0.3s');
    }
});

//header and toTopButton hide
var scrollPrev = 0;
$('.toTopButton').hide();

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if (scrolled > 200) {
        $('.toTopButton').fadeIn(300);
        if (scrolled > scrollPrev) {
            $('header').addClass('header_closed');
            $('header').removeClass('header_opened');
        } else {
            $('header').addClass('header_opened');
            $('header').removeClass('header_closed');
        }
    } else {
        $('.toTopButton').fadeOut(300);
    }
    scrollPrev = scrolled;
});

//burger
$('#burger').click(function(){
    $('.burger-menu').toggleClass('burger-menu_closed burger-menu_opened');
});

$('#burger-menu__close').click(function(){
    $('.burger-menu').toggleClass('burger-menu_closed burger-menu_opened');
});

$('.burger-menu__contacts').click(function(){
    $('.burger-menu').toggleClass('burger-menu_closed burger-menu_opened');
});

// casesGrab - блок с горизонтальным скроллом
casesGrab.onmousedown = () => {
    let pageX = 0;

    document.onmousemove = e => {
    if (pageX !== 0) {
        casesGrab.scrollLeft = casesGrab.scrollLeft + (pageX - e.pageX);
    }
    pageX = e.pageX;
    };

    // заканчиваем выполнение событий
    casesGrab.onmouseup = () => {
    document.onmousemove = null;
    casesGrab.onmouseup = null;
    };

    // отменяем браузерный drag
    casesGrab.ondragstart = () => {
    return false;
    };
};