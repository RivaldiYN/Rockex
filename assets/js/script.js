const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const elementClose = document.getElementsByClassName('overlay');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
});

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

for(let i = 0; i < elementClose.length; i++) {
    elementClose[i].addEventListener('click', function() {
        let url = window.location.href.substr(0, window.location.href.indexOf('#'))
        window.location = url;
    });
}