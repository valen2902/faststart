let sliderEl = $('.reviews');
let sliderBox = $('.slider');

let nowShowSlide = 0;

let sliderItems = sliderEl.find('.review');
let firstSlide = sliderItems.eq(0).clone();
sliderBox.append(firstSlide);

sliderItems = sliderEl.find('.review');

let counter = 0;
sliderEl.find('.right').click(function(){
    counter++;

    if (sliderItems.length - 1 > counter ) {
        
        sliderBox.animate( {
            'left' : -100 * counter + '%'
        }, 1000);
    } else {
        
        sliderBox.animate( {
            'left' : -100 * counter + '%'
        }, 1000, function() {
            sliderBox.css('left', 0);
            counter = 0;
        });
    }
});
sliderEl.find('.left').click(function(){
    if (counter == 0) {
        sliderBox.animate( {
            'left' : -100 * (sliderItems.length - 1) + '%'
        }, 0, function() {
            
            sliderBox.animate( {
            'left' : -100 * (sliderItems.length - 2) + '%'
            }, 1000)

        });
        counter = sliderItems.length - 2;
    } else {
        counter--;
        sliderBox.animate( {
            'left' : -100 * counter + '%'
        }, 1000);
    }
});

$('.about-us, .about-us1').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.header-inner').offset().top
    }, 1000);
});
$('.price-btn, .price, .details-price').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.price-list').offset().top
    }, 1000);
});
$('.merits, .details').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.ideas').offset().top
    }, 1000);
});
$('.order').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.call').offset().top
    }, 1000);
});
$('.reviews1').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.reviews').offset().top
    }, 1000);
});
$('.contacts, .call-us, button').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.write').offset().top
    }, 1000);
});
$('.details').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.').offset().top
    }, 1000);
});

$('.form').addClass('animated fadeInUp');