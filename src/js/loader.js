const body = document.querySelector('body');
window.onload = function () {
  const preloader = document.querySelector('.preloader');
  body.style.overflow = 'hidden';
  setTimeout(function () {
    preloader.classList.add('visually-hidden');
    body.style.overflow = 'visible';
  }, 2000);
};
