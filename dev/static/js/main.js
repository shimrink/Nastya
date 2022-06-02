$(document).ready(function () {
    svg4everybody({});
});


// show and hide faq-block
$('#faq__name_name1').click(function(){
    $('#faq__answer_answer1').toggleClass('faq__answer_closed faq__answer_opened');
    $('#faq__answer_answer1').css('transition', 'height 0.3s');
    $('#faq__svg_svg1').toggleClass('faq__svg_closed faq__svg_opened');
    $('#faq__svg_svg1').css('transition', 'transform 0.3s');
});
$('#faq__name_name2').click(function(){
    $('#faq__answer_answer2').toggleClass('faq__answer_closed faq__answer_opened');
    $('#faq__answer_answer2').css('transition', 'height 0.3s');
    $('#faq__svg_svg2').toggleClass('faq__svg_closed faq__svg_opened');
    $('#faq__svg_svg2').css('transition', 'transform 0.3s');
});
$('#faq__name_name3').click(function(){
    $('#faq__answer_answer3').toggleClass('faq__answer_closed faq__answer_opened');
    $('#faq__answer_answer3').css('transition', 'height 0.3s');
    $('#faq__svg_svg3').toggleClass('faq__svg_closed faq__svg_opened');
    $('#faq__svg_svg3').css('transition', 'transform 0.3s');
});
$('#faq__name_name4').click(function(){
    $('#faq__answer_answer4').toggleClass('faq__answer_closed faq__answer_opened');
    $('#faq__answer_answer4').css('transition', 'height 0.3s');
    $('#faq__svg_svg4').toggleClass('faq__svg_closed faq__svg_opened');
    $('#faq__svg_svg4').css('transition', 'transform 0.3s');
});
$('#faq__name_name5').click(function(){
    $('#faq__answer_answer5').toggleClass('faq__answer_closed faq__answer_opened');
    $('#faq__answer_answer5').css('transition', 'height 0.3s');
    $('#faq__svg_svg5').toggleClass('faq__svg_closed faq__svg_opened');
    $('#faq__svg_svg5').css('transition', 'transform 0.3s');
});
$('#faq__name_name6').click(function(){
    $('#faq__answer_answer6').toggleClass('faq__answer_closed faq__answer_opened');
    $('#faq__answer_answer6').css('transition', 'height 0.3s');
    $('#faq__svg_svg6').toggleClass('faq__svg_closed faq__svg_opened');
    $('#faq__svg_svg6').css('transition', 'transform 0.3s');
});
$('#faq__name_name7').click(function(){
    $('#faq__answer_answer7').toggleClass('faq__answer_closed faq__answer_opened');
    $('#faq__answer_answer7').css('transition', 'height 0.3s');
    $('#faq__svg_svg7').toggleClass('faq__svg_closed faq__svg_opened');
    $('#faq__svg_svg7').css('transition', 'transform 0.3s');
});
$('#faq__name_name8').click(function(){
    $('#faq__answer_answer8').toggleClass('faq__answer_closed faq__answer_opened');
    $('#faq__answer_answer8').css('transition', 'height 0.3s');
    $('#faq__svg_svg8').toggleClass('faq__svg_closed faq__svg_opened');
    $('#faq__svg_svg8').css('transition', 'transform 0.3s');
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