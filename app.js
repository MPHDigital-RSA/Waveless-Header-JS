const menuIcon = document.getElementById("menu-icon");
// const closeIcon = document.getElementById("close-icon");
const nav = document.getElementById("nav");
const navButtons = document.querySelectorAll(".nav-link")

// ? EVENT LISTNERS
menuIcon.addEventListener("click", () => {
    nav.style.opacity = "1";
    nav.style.visibility = "visible";
});

navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        nav.style.opacity = "0";
        nav.style.visibility = "hidden";
    })
})
