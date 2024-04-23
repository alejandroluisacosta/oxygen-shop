
document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector(body);
    const percentageScroller = document.getElementById("nav__percentage__scroller");

    scroller.addEventListener("scroll", () => {
        let scrolledPercentage = (body.scrollTop / body.scrollHeight) * 100;
        percentageScroller.style.backgroundColor = "black";
        percentageScroller.style.width = scrolledPercentage;
    });
})