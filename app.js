const menuIcon = document.getElementById("menu-icon");
// const closeIcon = document.getElementById("close-icon");
const nav = document.getElementById("nav");
const navButtons = document.querySelectorAll(".nav-link")

console.log(navButtons)

// ? EVENT LISTNERS
menuIcon.addEventListener("click", () => {
    nav.style.right = "0";
});

navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        nav.style.right = "-160px";

    })
})
