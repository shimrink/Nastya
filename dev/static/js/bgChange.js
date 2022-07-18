$(document).scroll(function() {
    if($('body').hasClass('services-page') && ($(window).scrollTop() > $('#white-block_2').offset().top - 300 && $(window).scrollTop() < $('#white-block_2').offset().top + $('#white-block_2').innerHeight() - 300
    || $(window).scrollTop() > $('#white-block_3').offset().top - 300 && $(window).scrollTop() < $('#white-block_3').offset().top + $('#white-block_3').innerHeight() - 300
    || $(window).scrollTop() > $('#white-block_4').offset().top - 300 && $(window).scrollTop() < $('#white-block_4').offset().top + $('#white-block_4').innerHeight() - 300
    || $(window).scrollTop() > $('#white-block_5').offset().top - 300 && $(window).scrollTop() < $('#white-block_5').offset().top + $('#white-block_5').innerHeight() - 300
    || $(window).scrollTop() > $('#white-block_6').offset().top - 300 && $(window).scrollTop() < $('#white-block_6').offset().top + $('#white-block_6').innerHeight() - 300)
    || $('body').hasClass('index-page') && ($(window).scrollTop() > $('#white-block_1').offset().top - 300 && $(window).scrollTop() < $('#white-block_1').offset().top + $('#white-block_1').innerHeight() - 300)) {
        $('.wrapper').addClass('wrapper__white');
        $('.card').addClass('card__white');
        $('.cases-arrow').addClass('cases-arrow_white');
        $('.line').addClass('line_white');
        $('.cases-svg').addClass('cases-svg_white');
        $('.circle').addClass('circle_white');
        $('.faq__svg').addClass('faq__svg_white');
        $('.top-line').addClass('top-line_white');
    } else {
        $('.wrapper').removeClass('wrapper__white');
        $('.card').removeClass('card__white');
        $('.cases-arrow').removeClass('cases-arrow_white');
        $('.line').removeClass('line_white');
        $('.cases-svg').removeClass('cases-svg_white');
        $('.circle').removeClass('circle_white');
        $('.faq__svg').removeClass('faq__svg_white');
        $('.top-line').removeClass('top-line_white');
    }
});