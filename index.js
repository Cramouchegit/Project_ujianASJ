var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var typed = new Typed(".auto-type01", {
  strings: ["IM Cramouche"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});
var typed = new Typed(".auto-type1", {
  strings: ["End Developer"],
  typeSpeed: 150,
  backSpeed: 120,
  loop: true,
});
