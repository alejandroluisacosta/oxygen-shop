const body = document.querySelector("body");
const percentageScroller = document.getElementById("nav__percentage-scroller");

window.addEventListener("scroll", () => {
    let scrolledPercentage = (document.documentElement.scrollTop / (body.scrollHeight - window.innerHeight)) * 100;
    percentageScroller.style.width = scrolledPercentage + "%";
});