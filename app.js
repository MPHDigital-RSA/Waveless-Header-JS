const menuIcon = document.getElementById("menu-icon");
// const closeIcon = document.getElementById("close-icon");
const nav = document.getElementById("nav");
const navButtons = document.querySelectorAll(".nav-link");
const appCounter = document.getElementById("app-counter");

// ? EVENT LISTENERS
menuIcon.addEventListener("click", () => {
    nav.style.opacity = "1";
    nav.style.visibility = "visible";
});

window.addEventListener("load", () => {

});

navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        nav.style.opacity = "0";
        nav.style.visibility = "hidden";
    })
});