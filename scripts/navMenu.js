const hamburgerMenu = document.getElementById("nav");
const header = document.getElementById("header");
const logo = document.getElementsByClassName("nav__content-container__logo");
const listPage = document.getElementsByClassName("nav__content-container__list__page");
const hamburgerIcon = document.getElementsByClassName("nav__content-container__menu");
const closeIcon = document.getElementsByClassName("nav__content-container__close");

hamburgerIcon[0].addEventListener("click", () => {
    if (window.innerWidth < 1000) {
        hamburgerMenu.classList.toggle("nav--open");
        header.classList.toggle("header--open");
        logo[0].classList.toggle("nav__content-container__logo--open");
        Array.from(listPage).forEach(element => {
            element.classList.toggle("nav__content-container__list__page--open");
        })
        hamburgerIcon[0].classList.toggle("nav__content-container__menu--open");
        closeIcon[0].classList.toggle("nav__content-container__close--open");
    }
})

closeIcon[0].addEventListener("click", () => {
    if (window.innerWidth < 1000) {
        hamburgerMenu.classList.toggle("nav--open");
        header.classList.toggle("header--open");
        logo[0].classList.toggle("nav__content-container__logo--open");
        Array.from(listPage).forEach(element => {
            element.classList.toggle("nav__content-container__list__page--open");
        })
        hamburgerIcon[0].classList.toggle("nav__content-container__menu--open");
        closeIcon[0].classList.toggle("nav__content-container__close--open");
    }
})