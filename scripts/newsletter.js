import { submitForm, checkValues } from "./formValidation.js";

const newsletterPopUp = document.getElementById("pop-up-modal");
const newsletterCloseBtn = document.getElementById("pop-up-modal__close");
const newsletterSubmitBtn = document.getElementById("newsletterSubmitBtn");
const newsletterTitle = document.getElementById("newsletterTitle");
const newsletterDescription = document.getElementById("newsletterDescription");
const newsletterNameInput = document.getElementById("newsletterNameInput");
const newsletterNameLabel = document.getElementById("newsletterNameLabel");
const newsletterEmailLabel = document.getElementById("newsletterEmailLabel");
const newsletterEmailInput = document.getElementById("newsletterEmailInput");
const newsletterPoliciesCheck = document.getElementById("newsletterPoliciesCheck");
const newsletterPoliciesText = document.getElementById("newsletterPoliciesText");
const newsletterButtonContainer = document.getElementById("newsletterButtonContainer");

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
        nameInput.classList.remove("input--rejected");
        emailInput.classList.remove("input--rejected");
        checkbox.classList.remove("policies-check--rejected");
        nameInput.value = "";
        emailInput.value = "";
        checkbox.checked = false;
    }
})