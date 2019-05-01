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

var newslatterInput = document.getElementsByClassName('form-input');
var inputText = document.getElementsByClassName('input-text');

newslatterInput[0].addEventListener('focus', inputTextFocus);
newslatterInput[0].addEventListener('blur', inputTextBlur);

function inputTextBlur() {
    inputText[0].classList.remove('input-active');
}   

function inputTextFocus() {
    inputText[0].classList += ' input-active';
}

var widgetNav = document.getElementsByClassName('widget-nav-link');
var navBottomLine = document.getElementsByClassName('bottom-line');
var widgetPosts = document.getElementsByClassName('widget-posts');
var currentNav = 0;
var lineLeft = 0;

for (var i = 0; i < widgetNav.length; i++) {
    widgetNav[i].addEventListener('click', currentWidgetNav)
}
    
function currentWidgetNav() {
    currentNav = this.value;
    for (var i = 0; i < widgetNav.length; i++) {
        widgetNav[i].className = 'widget-nav-link';
        widgetPosts[i].className = 'widget-posts';
    }

    widgetNav[currentNav].className = 'widget-nav-link current-nav-link';
    widgetPosts[currentNav].className = 'widget-posts widget-posts-active';
    lineLeft =  widgetNav[currentNav].offsetLeft;

    for (var i = 0; i < navBottomLine.length; i++){
        navBottomLine[i].style.left = lineLeft + "px";        
    }
}