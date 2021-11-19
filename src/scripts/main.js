/* eslint-disable linebreak-style */
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
  const navbar = document.querySelector('.navbar');
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
      navbar.classList.add('scroll-on');
    } else {
      navbar.classList.remove('scroll-on');
    }
  };
  const tabNav = document.querySelector('.tab-nav');
  const navMenu = document.querySelector('.nav-menu');
  navMenu.addEventListener('click', () => {
    if (!tabNav.checked) {
      tabNav.checked = true;
    } else {
      tabNav.checked = false;
    }
  });
  const body = document.querySelector('#maincontent');
  body.addEventListener('click', () => {
    tabNav.checked = false;
  });
});
