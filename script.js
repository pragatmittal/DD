var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar=document.querySelector(".container .slider-scrollbar")
    const sliderScrollThumb=sliderScrollbar.querySelector(".scrollbar-thumb")
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  
    const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (scrollbar-thumb.clientWidth-scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left=`${thumbPosition}px`
      };
    imageList.addEventListener("scroll", () => {
      handleSlideButtons();
      updateScrollThumbPosition();

    });
  };
  window.addEventListener("load",initSlider);
  function expandContent(button) {
    const parentDiv = button.closest('.option, .news-item, .make-difference');
    const content = parentDiv.querySelector('.expandable-content');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        button.textContent = 'Read More';
    } else {
        content.classList.add('expanded');
        button.textContent = 'Read Less';
    }
}

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.btn[onclick^="expandContent"]');
    expandButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            expandContent(this);
        });
    });
});