const sqcImg = document.querySelector('.ad-buds img');
const btn = document.querySelector('.ad-buds button');
let imgNum = 0;



function playSequence() {
    let timer = setInterval(function() {
        if(imgNum < 74){
            console.log(imgNum);
            imgNum++;
        }
    }, 150)
}


window.addEventListener('scroll', function playSequence() {
    console.log(scrollY);
    let timer = setInterval(function() {
            if(imgNum < 74){
            console.log(imgNum);
            imgNum++;
            sqcImg.src = 'img/sqc_img/galaxy-buds-pro-audio-seq2-' + imgNum + '.jpg';
        }
    }, 40)
});


