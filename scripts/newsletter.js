document.addEventListener("DOMContentLoaded", function() {
    const newsletterPopUp = document.getElementById("pop-up-modal");
    const newsletterCloseBtn = document.getElementById("pop-up-modal__close");

    setTimeout(() => {
        newsletterPopUp.style.display = "flex";
    }, 5000);

    window.addEventListener("scroll", () => {
        if (window.scrollY / document.documentElement.scrollHeight >= 0.25) {
            newsletterPopUp.style.display = "flex";
        }
    })

    newsletterCloseBtn.addEventListener("click", () => {
        
    })
})