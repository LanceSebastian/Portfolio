
let slideIndex = [1,1];
let slideId = ["photoSlide","workSlide"];
showSlides(1,0);
showSlides(1,1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n,no);
}

function showSlides(n,no) {
    let i;
    let slideshow = document.getElementsByClassName(slideId[no]);
    if (n > slideshow.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = slideshow.length}
    for (i = 0; i < slideshow.length; i++) {
        slideshow[i].style.display = "none";
    }
    slideshow[slideIndex[no]-1].style.display = "block";
}
