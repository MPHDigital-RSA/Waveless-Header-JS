const menuIcon = document.getElementById("menu-icon");
const body = document.querySelector(".body");
// const closeIcon = document.getElementById("close-icon");
const nav = document.getElementById("nav");
const navButtons = document.querySelectorAll(".nav-link");
const appCounter = document.getElementById("app-counter");
const testimonialsContainer = document.querySelector(".testimonials__container");

// DATA
let testimonialsData = [
    {
        "title": "Essential to my daily routine.",
        "message": "Managing tasks and tracking goals for my business has never been easier. The app's intuitive features and seamless document storage have become essential to my daily routine.",
        "name": "John L.",
        "position": "Small Business Owner",
        "avatarUrl": "John-avatar.png"
    },
    {
        "title": "Helps me achieve my goals.",
        "message": "This app has completely transformed the way I organize my work and life. The AI goal planning feature keeps me focused, and the task management tool is a game-changer. Highly recommended!",
        "name": "Jane A.",
        "position": "Marketing Manager",
        "avatarUrl": "Jane-avatar.png"
    },
    {
        "title": "Helps me meet deadlines.",
        "message": "I've tried countless productivity apps, but none come close to this one. The focus mode and calendar integration help me meet tight deadlines without missing a beat. I highly recommend using this app.",
        "name": "Micheal T.",
        "position": "Freelance Developer",
        "avatarUrl": "Michael-avatar.png"
    }
]


// ? EVENT LISTENERS
menuIcon.addEventListener("click", displayMobileNav);

window.addEventListener("load", printTestimonials);

// body.addEventListener("resize", () => {
//     // check if the offset width is less than 980 then remove the nav when the link is clicked other wise do nothing
//     console.log(body.offsetWidth);
// })

navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // check if the offset width is less than 980 then remove the nav when the link is clicked other wise do nothing
        if (body.offsetWidth < "980") {
            removeMobileNav();
        } else {
            displayMobileNav();
        }
    })
});

// EVENT HANDLERS
function removeMobileNav() {

    nav.style.opacity = "0";
    nav.style.visibility = "hidden";

}
function displayMobileNav() {
    nav.style.opacity = "1";
    nav.style.visibility = "visible";
}

function printTestimonials() {

    testimonialsData.forEach((card) => {
        // create testimonial card CONTAINER
        const testimonialCard = document.createElement("div");
        testimonialCard.classList.add("testimonial-card");
        testimonialCard.addEventListener("click", () => {
            window.open("testimonial.html", "_self");
        })

        // create testimonial title -- INSERT TESTIMONIAL CONTAINER
        const testimonialTitle = document.createElement("p");
        testimonialTitle.classList.add("testimonial-title");
        testimonialTitle.innerText = `"${card.title}"`;

        // create testimonial message -- INSERT TESTIMONIAL CONTAINER
        const testimonialMessage = document.createElement("p");
        testimonialMessage.classList.add("testimonial-message");
        testimonialMessage.innerText = card.message;

        // create testimonial author CONTAINER -- INSERT TESTIMONIAL CONTAINER
        const testimonialAuthor = document.createElement("div");
        testimonialAuthor.classList.add("testimonial-author");

        // avatar --INSERT TESTIMONIAL AUTHOR
        const avatar = document.createElement("img");
        avatar.classList.add("testimonial-author-avatar");
        avatar.setAttribute("alt", "");
        avatar.setAttribute("src", `images/${card.avatarUrl}`);

        // profile text container --INSERT TESTIMONIAL AUTHOR
        const profileTextContainer = document.createElement("div");

        // author name -- INSERT PRIFILE TEXT CONTAINER
        const authorName = document.createElement("p");
        authorName.classList.add("testimonial-author-name");
        authorName.innerHTML = card.name;

        // author position -- INSERT PRIFILE TEXT CONTAINER
        const authorposition = document.createElement("p");
        authorposition.classList.add("testimonial-author-position");
        authorposition.innerHTML = card.position;

        // take the profileTextContainer and insert authorName and authorposition
        profileTextContainer.appendChild(authorName);
        profileTextContainer.appendChild(authorposition);

        // take testimonialAuthor and insert avatar and profileTextContainer
        testimonialAuthor.appendChild(avatar);
        testimonialAuthor.appendChild(profileTextContainer);

        // take the testimonialCard and insert testimonialTitle, testimonialMessage and testimonialAuthor
        testimonialCard.appendChild(testimonialTitle);
        testimonialCard.appendChild(testimonialMessage);
        testimonialCard.appendChild(testimonialAuthor);

        // lastly take the testimonialsContainer and append testimonialCard
        testimonialsContainer.appendChild(testimonialCard);

    })

}


// JUST FUNCTIONS