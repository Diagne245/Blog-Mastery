import './js/bootstrap.bundle.min.js';
import './scss/fontawesome.scss';
import './scss/style.scss';

import loadBaseHTML from './js/baseHTML.js';
import homeWelcome from './static-html-components/homeWelcome.html';
import homeMain from './static-html-components/homeMain.html';
import loadContactPage from './js/contact.js';

// Add the app header and footer sections
loadBaseHTML();

// Global variables---------------------

const welcomeSection = document.getElementById('welcome');
const mainSection = document.getElementById('main');
const footer = document.getElementById('footer');

// Render Home Page -----------
const loadHomePage = () => {
  welcomeSection.innerHTML = homeWelcome;
  mainSection.innerHTML = homeMain;
};

// Navbar fixed top ---------------------
const navbarEl = document.querySelector('.navbar');
const removeDarkNavbar = () => {
  navbarEl.classList.contains('bg-dark') &&
    navbarEl.classList.remove('bg-dark', 'opacity-90', 'fixed-top');
};
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const mediaObj = '(orientation: landscape) and (max-height: 600px)';
  const navbarCollapse = document.querySelector('.navbar-collapse');

  window.matchMedia(mediaObj).matches && removeDarkNavbar();

  // only show the navbar in portrait mode
  if (scrollPosition > 100 && !window.matchMedia(mediaObj).matches) {
    navbarEl.classList.add('bg-dark', 'opacity-90', 'fixed-top');
    navbarCollapse.classList.contains('show') &&
      navbarCollapse.classList.remove('show');
  }
  scrollPosition < 100 &&
    navbarEl.classList.contains('bg-dark') &&
    navbarEl.classList.remove('bg-dark', 'opacity-90', 'fixed-top');
};

// Event Listeners -------------
const init = () => {
  document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
  });
  window.addEventListener('scroll', handleScroll);
  document
    .querySelector('.contact-btn')
    .addEventListener('click', loadContactPage);
  footer
    .querySelector('.footer-contact')
    .addEventListener('click', loadContactPage);
};

init();

export { welcomeSection, mainSection, handleScroll, removeDarkNavbar };
