$(document).scroll(function() {
    if($(window).scrollTop() > $('.white-block').offset().top - 300 && $(window).scrollTop() < $('.white-block').offset().top + $('.white-block').innerHeight() - 300) {
        $('body').addClass('body__white');
        $('.card').addClass('card__white');
        $('.cases-arrow').addClass('cases-arrow_white');
        $('.line').addClass('line_white');
        $('.cases-svg').addClass('cases-svg_white');
    } else {
        $('body').removeClass('body__white');
        $('.card').removeClass('card__white');
        $('.cases-arrow').removeClass('cases-arrow_white');
        $('.line').removeClass('line_white');
        $('.cases-svg').removeClass('cases-svg_white');
    }
});