
var images = ['1.jpg', '2.jpg', '3.jpg'];
var currentImage = 0;
for (var i = 0; i < images.length; i++) {
    $('.slider__controls').append('<div data-img="' + i + '" class="slider__control">');
}
function setCurrentSlide() {
    $('.slider__container').css('background-image', 'url("./img/' + images[currentImage] + '")')
    $('.slider__control').removeClass('slider__control--isActive');
    $('.slider__control[data-img=' + currentImage + ']').addClass('slider__control--isActive');
}
setCurrentSlide()

$('.slider__control').click(function () {
    currentImage = $(this).attr('data-img');
    setCurrentSlide();
})

$('.slider__control_right').click(function () {
    if (currentImage < images.length -1) {
        currentImage++;
    }
    else currentImage = 0;
    setCurrentSlide(); 
})
$('.slider__control_left').click(function () {
    if (currentImage > 0) {
        currentImage--;
    }
    else currentImage = images.length -1;
    setCurrentSlide(); 
})
