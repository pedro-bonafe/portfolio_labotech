// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// --- Mobile menu toggle ---
const menuToggle = document.getElementById('menu-toggle');
const navbarRight = document.getElementById('navbar-right');
menuToggle.addEventListener('click', () => {
  navbarRight.classList.toggle('open');
});
document.querySelectorAll('.navbar-right a').forEach(link => {
  link.addEventListener('click', () => {
    navbarRight.classList.remove('open');
  });
});

// --- Fade-in animation ---
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) el.classList.add('visible');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
