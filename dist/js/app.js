const hamburgerMenu = document.querySelector('.hamburger-menu');
const headerNav = document.querySelector(".header__nav");
const pageWraper = document.querySelector('body')

function toggleNav(){
    hamburgerMenu.classList.toggle('hamburger-menu--active');
    headerNav.classList.toggle('header__nav--active');
    pageWraper.classList.toggle('no-scroll');
}


hamburgerMenu.addEventListener('click',toggleNav)