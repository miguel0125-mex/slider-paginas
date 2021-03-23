/*=========== SLIDER-SHOW ===========*/

let index = 1;
showSlider(index);

function avanzaSlide(n) {
    showSlider(index += n);
}

function posicionSlide(n) {
    showSlider(index = n);


}

function showSlider(n) {
    var i;
    var slides = document.getElementsByClassName("slider__contenedor--slider");
    var punto = document.getElementsByClassName("puntos__individual");

    if (n > slides.length) {
        index = 1
    }
    if (n < 1) {
        index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < punto.length; i++) {
        punto[i].className = punto[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    punto[index - 1].className += " active";
}
setInterval(function tiempo() {
    showSlider(index += 1);
}, 5000);
