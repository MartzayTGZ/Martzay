let slideIndex = 1;
slides(slideIndex);

function changeSlides(n) {
    slides(slideIndex += n);
}

function slides(n) {
    const slideShow = document.querySelectorAll('.slide-show');
    if (n > slideShow.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slideShow.length;
    }
    for (i = 0; i < slideShow.length ; i++) {
        slideShow[i].style.display = "none";
    }
    slideShow[slideIndex-1].style.display = "block";
}
