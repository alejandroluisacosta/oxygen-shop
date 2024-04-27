import { checkValues, submitForm } from "./formValidation.js";


document.getElementById("contact").addEventListener("submit", (event) => {
    const nameInput = document.getElementById("contact-name");
    const userName = nameInput.value;
    const emailInput = document.getElementById("contact-email");
    const userEmail = emailInput.value;
    const checkbox = document.getElementById("contact-policies-check");

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
