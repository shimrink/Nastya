$(document).ready(function () {
    svg4everybody({});
});

// show and hide faq-block
$('.faq__answer').slideUp(300);
$('.faqq__answer').slideUp(300);
$('#faqAnswer_faqName9').slideDown(300);
$('#faqName9').addClass('faq__name_active');
$('#faqSvg_faqName9').addClass('faq__svg_opened');
$('#faqAnswer_faqName12').slideDown(300);
$('#faqName12').addClass('faq__name_active');
$('#faqSvg_faqName12').addClass('faq__svg_opened');
$('#faqAnswer_faqName15').slideDown(300);
$('#faqName15').addClass('faq__name_active');
$('#faqSvg_faqName15').addClass('faq__svg_opened');

$('.faq__name').click(function() {
    var id=$(this).attr('id');
    $('.faq__answer').slideUp(300);
    if(!$(this).hasClass('faq__name_active')) {
        $('.faq__name').removeClass('faq__name_active');
        $(this).addClass('faq__name_active');
        $('#faqAnswer_'+id).slideDown(300);
        $('.faq__svg').removeClass('faq__svg_opened');
        $('#faqSvg_'+id).addClass('faq__svg_opened');
        $('#faqSvg_'+id).css('transition', 'transform 0.3s');
    } else {
        $('.faq__name').removeClass('faq__name_active');
        $('#faqSvg_'+id).removeClass('faq__svg_opened');
        $('#faqSvg_'+id).css('transition', 'transform 0.3s');
    }
});

$('.faqq__name').click(function() {
    var id=$(this).attr('id');
    $('.faqq__answer').slideUp(300);
    if(!$(this).hasClass('faqq__name_active')) {
        $('.faqq__name').removeClass('faqq__name_active');
        $(this).addClass('faqq__name_active');
        $('#faqqAnswer_'+id).slideDown(300);
        $('.faqq__svg').removeClass('faqq__svg_opened');
        $('#faqqSvg_'+id).addClass('faqq__svg_opened');
        $('#faqqSvg_'+id).css('transition', 'transform 0.3s');
    } else {
        $('.faqq__name').removeClass('faqq__name_active');
        $('#faqqSvg_'+id).removeClass('faqq__svg_opened');
        $('#faqqSvg_'+id).css('transition', 'transform 0.3s');
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
$('#burger').click(function() {
    $('.burger-menu').toggleClass('burger-menu_closed burger-menu_opened');
});

$('#burger-menu__close').click(function() {
    $('.burger-menu').toggleClass('burger-menu_closed burger-menu_opened');
});

$('.burger-menu__contacts').click(function() {
    $('.burger-menu').toggleClass('burger-menu_closed burger-menu_opened');
});

//anchor on services page
$('#stage1').click(function() {
    document.location.href = "../services.php#white-block_5";
});

$('#stage2').click(function() {
    document.location.href = "../services.php#white-block_5";
});

// drag horizontal scroll
var movement = false;
var mousedown = false;

function onMouseMove(e) {
    e.preventDefault();
    e.stopPropagation();
    if(mousedown) {
        movement = true;
        this.scrollLeft -= event.movementX;
        this.scrollTop -= event.movementY;
    }
}

function onMouseDown() {
    mousedown = true;
    movement = false;
}

function onMouseUp(e) {
    mousedown = false;
    setTimeout(()=>movement = false, 10);
}

function onMouseClick(e) {
    if(movement) {
        e.preventDefault();
        e.stopPropagation();
    }
}

function onDragStart(e) {
    e.preventDefault();
    e.stopPropagation();
}

var scr = $(".carousel");

scr.mousemove(onMouseMove);
scr.mousedown(onMouseDown);
$(window).mouseup(onMouseUp);
window.addEventListener('dragstart',onDragStart);
window.addEventListener('blur',onMouseUp);
$('.carousel a').click(onMouseClick);

//offer tabs
$('#21').addClass('offer__button_active');
$('#31').addClass('offer__button_active');
$('.concept').hide();
$('.identity').hide();
$('.more-services').hide();
$('.method-identity').hide();
$('.offer__button').click(function() {
    var num=$(this).attr('id');

    if(!$(this).hasClass('offer__button_active')) {
        $('.offer__button').removeClass('offer__button_active');
        $(this).addClass('offer__button_active');

        if(num == 31) {
            $('.look-wrap').show();
            $('.web-design').show();
            $('.identity').hide();
            $('.more-services').hide();
            $('.method-web').show();
            $('.method-identity').hide();
        } else if(num == 32) {
            $('.look-wrap').hide();
            $('.web-design').hide();
            $('.identity').show();
            $('.more-services').hide();
            $('.method-web').hide();
            $('.method-identity').show();
        } else if(num == 33) {
            $('.look-wrap').hide();
            $('.web-design').hide();
            $('.identity').hide();
            $('.more-services').show();
            $('.method-web').hide();
            $('.method-identity').hide();
        }

        if(num == 21) {
            $('.project').show();
            $('.concept').hide();
        } else if(num == 22) {
            $('.project').hide();
            $('.concept').show();
        }
    }
});

$('#41').addClass('look__button_active');
$('.web-design__site').hide();
$('.look__button').click(function() {
    var num=$(this).attr('id');

    if(!$(this).hasClass('look__button_active')) {
        $('.look__button').removeClass('look__button_active');
        $(this).addClass('look__button_active');

        if(num == 41) {
            $('.web-design__landing').show();
            $('.web-design__site').hide();
            $('.look__button').css('transform', 'translate(-1px, -1px)');
        } else if(num == 42) {
            $('.web-design__site').show();
            $('.web-design__landing').hide();
            $('.look__button').css('transform', 'translate(1px, -1px)');
        }
    }
});

//animate text
const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 700);
}

$('.offer__hi').addClass('offer__transition');
$('.offer__title').addClass('offer__transition');
$('.offer__wrap').addClass('offer__transition');

//animate asya circ $('.main-services__img_mobile')
window.addEventListener("scroll", function () {
    let scroll = window.pageYOffset;
    let banner = document.querySelector(".main-services__img_mobile");
    banner.style.transform = "translateY(" + (800 - scroll) / 50 + "%) scale(" + (80 + scroll / 50) / 100 + ")";
});