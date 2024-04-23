
document.addEventListener("DOMContentLoaded", function() {
    
    const hamburgerMenu = document.getElementById("nav");
    const header = document.getElementById("header");
    const logo = document.getElementsByClassName("nav__logo");
    const listPage = document.getElementsByClassName("nav__list__page");
    const hamburgerIcon = document.getElementsByClassName("nav__menu");
    const closeIcon = document.getElementsByClassName("nav__close");

    hamburgerMenu.addEventListener("click", () => {
        if (hamburgerMenu.classList.contains("closed")) {
            hamburgerMenu.style.cssText = "max-height: 14.688rem; position: absolute; z-index: 1; padding-bottom: 1.188rem; background-color: white;";
            header.style.cssText = "padding-top: 10.625rem";
            logo[0].style.cssText = "display: block; margin-bottom: 2.875rem";
            Array.from(listPage).forEach(element => {
                element.style.cssText = "display: block";
            })
            hamburgerIcon[0].style.cssText = "display: none; visibility: hidden; opacity: 0";
            closeIcon[0].style.cssText = "visibility: visible; opacity: 1; position: absolute; right: 1.875rem; top: 1.5rem; color: var(--oxy-light-blue)";
            hamburgerMenu.classList.toggle("closed");
        }
        else {
            hamburgerMenu.style.cssText = "max-height: 6rem";
            header.style.cssText = "";
            logo[0].style.cssText = "";
            Array.from(listPage).forEach(element => {
                element.style.cssText = "";
            })
            hamburgerIcon[0].style.cssText = "";
            closeIcon[0].style.cssText = "";
            hamburgerMenu.classList.toggle("closed");
        }
    })
})