let siteList = document.querySelector('.main-nav__site-list');
let navToggle = document.querySelector('.main-nav__toggle');

siteList.classList.remove('main-nav__site-list--nojs');
siteList.classList.remove('main-nav__site-list--opened');
siteList.classList.add('main-nav__site-list--closed');


navToggle.addEventListener('click', function () {
  if (siteList.classList.contains('main-nav__site-list--closed')) {
    siteList.classList.remove('main-nav__site-list--closed');
    siteList.classList.add('main-nav__site-list--opened');
  } else {
    siteList.classList.add('main-nav__site-list--closed');
    siteList.classList.remove('main-nav__site-list--opened');
  }
});
