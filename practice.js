const slides = document.querySelector('.container_slide');
const slideImg = document.querySelectorAll('.container_slide li'); 
let currentIdx = 0; 
const slideCount = slideImg.length;
const prev = document.querySelector('.left-btn');
const next = document.querySelector('.right-btn');
const slideWidth = 500; 
const slideMargin = 0; 
 
 slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';
 function moveSlide(num) { slides.style.left = -num * 400 + 'px'; currentIdx = num; }
 
prev.addEventListener('click', function () {
    if (currentIdx !== slideCount - 1) { moveSlide(currentIdx + 1); }
});

next.addEventListener('click', function () {
    if (currentIdx !== slideCount - 1) { moveSlide(currentIdx + 1); } 
});

