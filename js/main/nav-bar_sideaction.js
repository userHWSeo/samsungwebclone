const barBtn = document.querySelector('.bars');
const hiddenMenu = document.querySelector('.hidden_menu')

function toggleMenu(){
    hiddenMenu.classList.toggle('sidenav-on');
    barBtn.classList.toggle('btn-change')
}


barBtn.addEventListener('click', toggleMenu);