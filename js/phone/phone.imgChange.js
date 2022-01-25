// const firImg = document.querySelector('.img-one').src = "https://images.samsung.com/kdp/goods/2021/08/27/b3ae447d-c7db-4399-81d3-cdd4bda0c3b6.png?$PD_GALLERY_L_PNG$";
// const secImg = document.querySelector('.img-two').src = "https://images.samsung.com/kdp/goods/2021/08/18/14080db0-2c66-44d6-b47c-401bcff5484c.png?$PD_GALLERY_L_PNG$";
// const thiImg = document.querySelector('.img-three').src = "https://images.samsung.com/kdp/goods/2021/08/18/ce06fe84-6d43-4247-9306-629a0091224b.png?$PD_GALLERY_L_PNG$";
// const fouImg = document.querySelector('.img-four').src = "https://images.samsung.com/kdp/goods/2021/08/18/decce998-0e51-495f-8807-06eac1d38274.png?$PD_GALLERY_L_PNG$";
// const fifImg = document.querySelector('.img-five').src = "https://images.samsung.com/kdp/goods/2021/08/18/0af96876-924e-4d3d-a2bf-736d52894d36.png?$PD_GALLERY_L_PNG$";
// const sixImg = document.querySelector('.img-six').src = "https://images.samsung.com/kdp/goods/2021/08/19/3ef71bb9-fdcb-414f-8628-d145f85e06d6.png?$PD_GALLERY_L_PNG$";
// const sevImg = document.querySelector('.img-seven').src = "https://images.samsung.com/kdp/goods/2021/08/18/c5968a62-8863-440b-a5c9-3238d8f65481.png?$PD_GALLERY_L_PNG$";
// const egiImg = document.querySelector('.img-eight').src = "https://images.samsung.com/kdp/goods/2021/08/18/5bae5c5e-f184-4522-a2ed-31afe499e459.png?$PD_GALLERY_L_PNG$";

//Button Variable
const blackBtn = document.querySelector('.btnBlack');
const greenBtn = document.querySelector('.btnGreen');
const silverBtn = document.querySelector('.btnSilver');

function imgColorGreen() {
    document.querySelector('.img-one').src = "https://images.samsung.com/kdp/goods/2021/08/27/b3ae447d-c7db-4399-81d3-cdd4bda0c3b6.png?$PD_GALLERY_L_PNG$";
    // document.querySelector('.img-two').src = 
    // document.querySelector('.img-three').src = 
    // document.querySelector('.img-four').src = 
    // document.querySelector('.img-five').src = 
    // document.querySelector('.img-six').src = 
    // document.querySelector('.img-seven').src = 
    // document.querySelector('.img-eight').src = 
}

//Handler
greenBtn.addEventListener('click', imgColorGreen);