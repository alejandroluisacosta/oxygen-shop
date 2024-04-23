
document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelector("form").addEventListener("submit", (event) => {
        const nameInput = document.getElementById("name");
        const userName = nameInput.value;
        const emailInput = document.getElementById("email");
        const userEmail = emailInput.value;
        const checkbox = document.getElementById("policies-check");
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        event.preventDefault();

        const checkValues = () => {
            if (userName.length < 2 || userName.length > 100) {
                nameInput.style.cssText = "border-bottom: 1.5px solid red";
                alert("Enter a valid name (Between 2 and 100 characters)");
                return false;
            }
            else {
                nameInput.style.cssText = "";
            }
            if (!emailRegex.test(userEmail)) {
                emailInput.style.cssText = "border-bottom: 1.5px solid red";
                alert("Enter a valid email");
                return false;
            }
            else {
                emailInput.style.cssText = "";
            }
            if (!checkbox.checked) {
                checkbox.style.cssText = "outline: 1.5px solid red;";
                alert("You need to agree to the data protection policies")
                return false;
            }
            else {
                checkbox.style.cssText = "";
            }

            nameInput.value = "";
            emailInput.value = "";
            checkbox.checked = false;
            
            return true;
        }

        if (checkValues()) {
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

    })
})