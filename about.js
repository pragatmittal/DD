let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}

document.querySelector('.prev').addEventListener('click', function() {
    slideIndex -= 2;
    showSlides();
});

document.querySelector('.next').addEventListener('click', function() {
    showSlides();
});

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}