/* eslint-disable import/extensions */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './main.js';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App();
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
