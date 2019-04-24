//about
var testimonial = document.getElementsByClassName('testimonial');
var currentTestimonial = 2;

setInterval(showTestimonial, 5000);

function showTestimonial() {
    currentTestimonial++;
    currentTestimonial > 2 ? currentTestimonial = 0 : currentTestimonial;
    for(var i = 0; i < testimonial.length; i++) {
        testimonial[i].className = 'testimonial';
    }
    testimonial[currentTestimonial].className = 'testimonial testimonial-active';
    
}