const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const elementClose = document.getElementsByClassName('overlay');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
});

for(let i = 0; i < elementClose.length; i++) {
    elementClose[i].addEventListener('click', function() {
        let url = window.location.href.substr(0, window.location.href.indexOf('#'))
        window.location = url;
    });
}