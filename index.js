slide = document.getElementsByClassName('slide');
currentSlide = 0;

setInterval(showSlide, 5000);

function showSlide() {
    currentSlide++;
    currentSlide > 1 ? currentSlide = 0 : currentSlide;
    for (var i = 0; i < slide.length; i++) {
        slide[i].className = 'slide';
    }
    slide[currentSlide].className = 'slide slide-active';
}