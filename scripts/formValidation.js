
document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelector("form").addEventListener("submit", (event) => {
        const nameInput = document.getElementById("name");
        const userName = nameInput.value;
        const emailInput = document.getElementById("email");
        const userEmail = emailInput.value;
        const form = document.getElementById("policies-check");
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        event.preventDefault();

        if (userName.length < 2 || userName.length > 100)
            nameInput.style.borderBottom = "1.5px solid red";
        
        
        if (!emailRegex.test(userEmail))
            emailInput.style.borderBottom = "1.5px solid red";
    })
})