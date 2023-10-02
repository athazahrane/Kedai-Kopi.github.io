// navbar sidebar
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger');

// remove navbar if user click outside area sidebar
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
}); 

document.querySelector('.nav-link').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbarNav.classList.remove("active"); 
}));