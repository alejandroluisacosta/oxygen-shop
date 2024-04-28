const bodyForScroller = document.querySelector("body");
const percentageScroller = document.getElementById("nav__percentage-scroller");

window.addEventListener("scroll", () => {
    let scrolledPercentage = (document.documentElement.scrollTop / (bodyForScroller.scrollHeight - window.innerHeight)) * 100;
    percentageScroller.style.width = scrolledPercentage + "%";
});