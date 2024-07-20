let navBar = document.querySelector(".navLinks");
let closeBtn = document.querySelector("#closeBtn");
let menuBar = document.querySelector(".toggle-icon");

menuBar.onclick = () => {
  navBar.classList.toggle("active");
};

closeBtn.onclick = () => {
  navBar.classList.remove("active");
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".myCustomer", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
