import { welcomeSection, mainSection } from '..';

import contactWelcome from '../static-html-components/contactWelcome.html';
import contactMain from '../static-html-components/contactMain.html';
import { handleScroll, removeDarkNavbar } from '..';

const header = document.getElementById('header');
const footer = document.getElementById('footer');

// remove navigation links
const removeNavigationLinks = () => {
  header.querySelector('.navbar-toggler').classList.add('d-none');
  header.querySelector('.navbar').classList.add('contactNav');
  removeDarkNavbar();
};

// Remove footer links on contact page
const removeFooterLinks = () => {
  const footerLinks = footer.querySelector('.footer-links');
  footerLinks && footerLinks.classList.add('d-none');

  footer
    .querySelector('.contact-footer')
    .classList.replace('d-none', 'd-block');
};

// Location Map ---------------
const loadMap = () => {
  const map = L.map('map');

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker().addTo(map);
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      marker.setLatLng([lat, lng]).update();
      map.setView([lat, lng], 16);
    },
    (err) => {
      console.log(`Error: ${err.code} - ${err.message}`);
    },
    { enableHighAccuracy: true }
  );

  marker.bindPopup('Here is our location').openPopup();
};

const loadContactPage = () => {
  removeNavigationLinks();

  welcomeSection.innerHTML = contactWelcome;
  mainSection.innerHTML = contactMain;

  loadMap();
  removeFooterLinks();

  window.removeEventListener('scroll', handleScroll);
  window.scrollTo(0, 0);
};

export default loadContactPage;
