import { submitForm, checkValues } from "./formValidation.js";

const newsletterPopUp = document.getElementById("pop-up-modal");
const newsletterCloseBtn = document.getElementById("pop-up-modal__close");
const newsletterSubmitBtn = document.getElementById("newsletterSubmitBtn");
console.log(newsletterSubmitBtn);

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

// document.addEventListener("click", (event) => {
//     if (event.target !== newsletterPopUp) {
//         newsletterPopUp.style.display = "none";
//         localStorage.setItem("newsletterShown", "true");
//     }
// })

newsletterPopUp.addEventListener("submit", () => {

})

newsletterSubmitBtn.addEventListener("click", (event) => {
    const nameInput = document.getElementById("newsletterNameInput");
    const userName = nameInput.value;
    const emailInput = document.getElementById("newsletterEmailInput");
    const userEmail = emailInput.value;
    const checkbox = document.getElementById("newsletterPoliciesCheck");

    event.preventDefault();

    const checked = checkValues(nameInput, userName, emailInput, userEmail, checkbox);
    if (checked) {
        submitForm(userName, userEmail);
        nameInput.style.cssText = "";
        emailInput.style.cssText = "";
        checkbox.style.cssText = "";
        nameInput.value = "";
        emailInput.value = "";
        checkbox.checked = false;
    }
})