const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

const clickHandler = function() {
  hamburger.classList.toggle('hamburger--active');
  menu.classList.toggle('menu--active');
};

hamburger.addEventListener('click', clickHandler);