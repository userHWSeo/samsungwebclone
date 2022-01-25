const containerSlide = document.querySelector('.container_slide');
const phoneImgs = document.querySelector('.container_slide li');
let currentIdx = 0;

//Btn
const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');

function moveSlide(num){
    containerSlide.style.left = -num * 700 + 'px';
    currentIdx = num;
}

//listener
prevBtn.addEventListener('click', function(){
    if(currentIdx !== 0) moveSlide(currentIdx - 1);
})
nextBtn.addEventListener('click', function(){
    if(currentIdx !== 7) moveSlide(currentIdx + 1);
})