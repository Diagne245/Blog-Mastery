import appHeader from '../static-html-components/appHeader.html';
import appFooter from '../static-html-components/appFooter.html';

const header = document.getElementById('header');
const footer = document.getElementById('footer');

const loadBaseHTML = () => {
  header.innerHTML = appHeader;
  footer.innerHTML = appFooter;
};

export default loadBaseHTML;
