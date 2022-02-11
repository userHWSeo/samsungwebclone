const sqcImg = document.querySelector('.ad-buds img');
const btn = document.querySelector('.ad-buds button');
let imgNum = 0;
let timer;
let bool = false;



// function
// 이미지 시퀀스
function playSequence() {
        timer = setInterval(function() {
        if(imgNum < 74){
            console.log(imgNum);
            imgNum++;
            sqcImg.src = 'img/sqc_img/galaxy-buds-pro-audio-seq2-' + imgNum + '.jpg';
        }
    }, 30)
}

// 스크롤 위치에 따른 이벤트
function scrollEvent() {
    // console.log(window.scrollY);
    if(window.innerWidth < 500) {
        if (window.scrollY > 7300 && bool == false){
            bool = true;
            playSequence();
            // console.log(bool);
        }
        else if(window.scrollY < 6900 && bool == true){
            imgNum = 0;
            bool = false;
            clearInterval(timer);
            // console.log(bool);
        }
    }
    else if(window.innerWidth)
    if (window.scrollY > 10200 && bool == false){
        bool = true;
        playSequence();
        console.log(bool);
    }
    else if(window.scrollY < 9500 && bool == true){
        imgNum = 0;
        clearInterval(timer);
        bool = false;
        console.log(bool);
    }
}

// handler
window.addEventListener("scroll", scrollEvent);