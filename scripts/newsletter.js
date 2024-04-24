document.addEventListener("DOMContentLoaded", function() {
    const newsletterPopUp = document.getElementById("pop-up-modal");
    const newsletterCloseBtn = document.getElementById("pop-up-modal__close");
    localStorage.setItem("newsletterShown", "false");

    setTimeout(() => {
        if (localStorage.getItem("newsletterShown") === "false") {
            newsletterPopUp.style.display = "flex";
        }
    }, 5000);

    window.addEventListener("scroll", () => {
        if (window.scrollY / document.documentElement.scrollHeight >= 0.25 && localStorage.getItem("newsletterShown") === "false" ) {
            newsletterPopUp.style.display = "flex";
        }
    })

    newsletterCloseBtn.addEventListener("click", () => {
        newsletterPopUp.style.display = "none";
        localStorage.setItem("newsletterShown", "true");
    })

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            newsletterPopUp.style.display = "none";
            localStorage.setItem("newsletterShown", "true");

        }
    })

    document.addEventListener("click", (event) => {
        if (event.target !== newsletterPopUp) {
            newsletterPopUp.style.display = "none";
            localStorage.setItem("newsletterShown", "true");

        }
    })
})