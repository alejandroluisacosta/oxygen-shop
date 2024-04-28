import { submitForm, checkValues } from "./formValidation.js";

const newsletterPopUp = document.getElementById("pop-up-modal");
const newsletterCloseBtn = document.getElementById("pop-up-modal__close");
const newsletterSubmitBtn = document.getElementById("newsletterSubmitBtn");

setTimeout(() => {
    if (localStorage.getItem("newsletterShown") === "false") {
        newsletterPopUp.classList.add("opened");
    }
}, 5000);

window.addEventListener("scroll", () => {
    if (window.scrollY / document.documentElement.scrollHeight >= 0.25 && localStorage.getItem("newsletterShown") === "false" ) {
        newsletterPopUp.classList.add("opened");
    }
})

newsletterCloseBtn.addEventListener("click", () => {
        newsletterPopUp.classList.remove("opened");
    localStorage.setItem("newsletterShown", "true");
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        newsletterPopUp.classList.remove("opened");
        localStorage.setItem("newsletterShown", "true");

    }
})

document.addEventListener("click", (event) => {
    if (event.target !== newsletterPopUp) {
        newsletterPopUp.classList.remove("opened");
        localStorage.setItem("newsletterShown", "true");
    }
})

const newsletterChildren = Array.from(newsletterPopUp.querySelectorAll("*"));
newsletterChildren.forEach(element => {
    if (element.id !== "pop-up-modal__close") {
        element.addEventListener("click", (event) => {
            event.stopPropagation();
        })
    }
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
        nameInput.classList.remove("input--rejected");
        emailInput.classList.remove("input--rejected");
        checkbox.classList.remove("policies-check--rejected");
        nameInput.value = "";
        emailInput.value = "";
        checkbox.checked = false;
        newsletterPopUp.classList.remove("opened");
        localStorage.setItem("newsletterShown", "true");
    }
})