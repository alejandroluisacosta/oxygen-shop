const returnTopBtn = document.getElementById('return-top');
const body = document.querySelector("body");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > (body.scrollHeight - window.innerHeight) * 0.25)
        returnTopBtn.classList.add("shown");
    else
        returnTopBtn.classList.remove("shown");
})

returnTopBtn.addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo(top);
        returnTopBtn.classList.toggle("return-top--clicked");
        setTimeout(() => {
        returnTopBtn.classList.toggle("return-top--clicked");
        }, 100) 
    }, 200);
})

