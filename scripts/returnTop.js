document.addEventListener("DOMContentLoaded", function() {
    
    const returnTopBtn = document.getElementById('return-top');

    returnTopBtn.addEventListener("click", () => {
        setTimeout(() => {
            window.scrollTo(top);
            returnTopBtn.style.backgroundColor = "#004BA8";
            returnTopBtn.style.border = "2px solid black";
            returnTopBtn.style.boxShadow = "inset 2px 2px 4px rgba(0, 0, 0, 0.2), 2px 2px 4px rgba(0, 0, 0, 0.2)";
            setTimeout(() => {
                returnTopBtn.style.backgroundColor = "var(--oxy-blue)";
                returnTopBtn.style.border = "0";
                returnTopBtn.style.boxShadow = "none";
            }, 100) 
        }, 200);
    })
})

