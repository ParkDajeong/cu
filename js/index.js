const eventSlide = new Swiper(".event-banner", {
  loop: true,
  slidesPerView: 1, 
  centeredSlides: true,
  breakpoints: {
    1280: {
      slidesPerView: "auto",
      spaceBetween: 10,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (i, className) => `<span class=${className} role="button" aria-label="${i + 1}번 슬라이드로 이동"></span>`
  },
  navigation: {
    nextEl: '.event-banner-next',
    prevEl: '.event-banner-prev',
  },
});

const isuueSlide = new Swiper(".issue-banner", {
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  breakpoints: {
    1280: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (i, className) => `<span class=${className} role="button" aria-label="${i + 1}번 슬라이드로 이동"></span>`
  },
  navigation: {
    nextEl: '.issue-banner-next',
    prevEl: '.issue-banner-prev',
  },
});

const plusSlide = new Swiper(".plus-banner", {
  slidesPerView: "auto",
  slidesPerGroup: 4, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (i, className) => `<span class=${className} role="button" aria-label="${i + 1}번 슬라이드로 이동"></span>`
  },
  navigation: {
    nextEl: '.plus-banner-next',
    prevEl: '.plus-banner-prev',
  },
});

const brandSlide = new Swiper(".brand-banner", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (i, className) => `<span class=${className} role="button" aria-label="${i + 1}번 슬라이드로 이동"></span>`
  },
});

const btnGnb = document.querySelector(".btn-gnb");
const btnGnbClose = document.querySelector(".btn-gnb-close");
const gnb = document.querySelector(".all-menu .menu-wrap");

btnGnb.addEventListener("click", () => gnb.classList.add("on"));
btnGnbClose.addEventListener("click", () => gnb.classList.remove("on"));