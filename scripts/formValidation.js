export const checkValues = (nameInput, userName, emailInput, userEmail, checkbox) => {
    console.log(userName.length);
    if (userName.length < 2 || userName.length > 100) {
        nameInput.style.cssText = "border-bottom: 1.5px solid red"; // Dar estilos con una clase aparte
        alert("Enter a valid name (Between 2 and 100 characters)");
        return false; // Mostrar todos los errores en un solo alert
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(userEmail)) {
        emailInput.style.cssText = "border-bottom: 1.5px solid red";
        alert("Enter a valid email");
        return false;
    }

    if (!checkbox.checked) {
        checkbox.style.cssText = "outline: 1.5px solid red;";
        alert("You need to agree to Oxygen Shop's terms and conditions")
        return false;
    }
    
    return true;
}

export const submitForm = (userName, userEmail) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: userName,
            email: userEmail,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => { 
            console.log(json); 
            alert("Form submitted successfully")
        }) 
        .catch((error) => console.error('Error:', error));
}

document.querySelector("form").addEventListener("submit", (event) => {
    const nameInput = document.getElementById("name");
    const userName = nameInput.value;
    const emailInput = document.getElementById("email");
    const userEmail = emailInput.value;
    const checkbox = document.getElementById("policies-check");

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