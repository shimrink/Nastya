$(document).ready(function () {
    svg4everybody({});
});

$('.faq__answer').slideUp(300);
// show and hide faq-block
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
$('#drop-menu__item1').click(function() {
    document.location.href = "../services.php#webDes";
});

$('#drop-menu__item2').click(function() {
    document.location.href = "../services.php#brand";
});

$('#drop-menu__item3').click(function() {
    document.location.href = "../services.php#moreServ";
});

// Drag horizontal scroll
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

function onDragStart(e){
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
$('.offer__free').addClass('offer__transition');