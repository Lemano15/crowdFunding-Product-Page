let navigationBar = document.getElementById('nav')
let mobileMenuBttn = document.getElementById('menuIcon');
let navLinks = document.getElementById('navLinks');

function toggleNavigation() {
    if (navLinks.style.display == "none") {
        navLinks.style.display = "flex"
        mobileMenuBttn.src = "images/icon-close-menu.svg"
    }
    else {
        navLinks.style.display = "none"
        mobileMenuBttn.src = "images/icon-hamburger.svg"
        document.body.style.backgroundImage = 'none';     
    }
}