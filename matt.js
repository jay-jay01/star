var slideindex = 0;
showslider();

function showslider() {
    var i;
    var slides = document.getElementsByClassName("Mysliders");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideindex++;
    if (slideindex > slides.length) {
        slideindex = 1
    }

    slides[slideindex - 1].style.display = "block";
    setTimeout(showslider, 1500);

}