var slide = document.getElementsByClassName('slide');
var currentSlide = 0;

setInterval(showSlide, 5000);

function showSlide() {
    currentSlide++;
    currentSlide > 1 ? currentSlide = 0 : currentSlide;
    for (var i = 0; i < slide.length; i++) {
        slide[i].className = 'slide';
    }
    slide[currentSlide].className = 'slide slide-active';
}

var typeButton = document.getElementsByClassName('type-button');
var currenTypeIndex= 0;


for (var i = 0; i < typeButton.length; i++) {
    typeButton[i].addEventListener('click', currentType)
    
}

function currentType() {
    currentTypeIndex = this.value;
    for (var i = 0; i < typeButton.length; i++) {
        typeButton[i].className = 'type-button';
        
    }
    typeButton[currentTypeIndex].className = 'type-button type-active';
    showCurrentItem();
}

var portfolioItemClass = '';
var portfolioItem = document.getElementsByClassName('portfolio-item');

function showCurrentItem() {   
    switch(currentTypeIndex) {
        case '0': portfolioItemClass = 'portfolio-item';
        break;

        case '1': portfolioItemClass = 'type-photography';
        break;

        case '2': portfolioItemClass = 'type-webdesign';
        break;

        case '3': portfolioItemClass = 'type-logo';
        break;

        case '4': portfolioItemClass = 'type-graphics';
        break;

        case '5': portfolioItemClass = 'type-advertising';
        break;
        
        case '6': portfolioItemClass = 'type-fashion';
        break;
    }
    
    for (var i = 0; i < portfolioItem.length; i++) {
        
        if (portfolioItem[i].classList.contains('portfolio-active')) {
            portfolioItem[i].classList.remove('portfolio-active');
        }

        if (portfolioItem[i].classList.contains(portfolioItemClass)) {
            portfolioItem[i].classList += ' portfolio-active';
        }
    }
}