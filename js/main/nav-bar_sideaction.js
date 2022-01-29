const barBtn = document.querySelector('.bars');
const hiddenMenu = document.querySelector('.hidden_menu')

barBtn.addEventListener('click', function(){
    hiddenMenu.classList.toggle('sidenav-on');
});