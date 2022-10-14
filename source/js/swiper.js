const swiper = new Swiper('.swiper', {
  cssMode: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },

  mousewheel: true,
  keyboard: true,
});
