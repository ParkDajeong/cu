const eventSlide = new Swiper(".event-banner", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (i, className) => `<span class=${className} role="button" aria-label="${i + 1}번 슬라이드로 이동"></span>`
  },
  navigation: {
    enabled: false,
    nextEl: '.event-banner-next',
    prevEl: '.event-banner-prev',
  },
  breakpoints: {
    1280: {
      slidesPerView: "auto",
      centeredSlides: true,
    }, 
    767: {
      slidesPerView: 1,
      navigation: {
        enabled: true,
      }
    }, 
    375: {
      slidesPerView: "auto",
      spaceBetween: 10,
      centeredSlides: false,
      navigation: {
        enabled: false,
      }
    }
  },
});

const isuueSlide = new Swiper(".issue-banner", {
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (i, className) => `<span class=${className} role="button" aria-label="${i + 1}번 슬라이드로 이동"></span>`
  },
  navigation: {
    nextEl: '.issue-banner-next',
    prevEl: '.issue-banner-prev',
  },
  breakpoints: {
    1280: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
});

const plusSlide = new Swiper(".plus-banner", {
  slidesPerView: 2,
  slidesPerGroup: 2, 
  grid: {
    rows: 2,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (i, className) => `<span class=${className} role="button" aria-label="${i + 1}번 슬라이드로 이동"></span>`
  },
  breakpoints: {
    767: {
      slidesPerView: 4,
      slidesPerGroup: 4, 
      grid: {
        rows: 1,
      },
    },
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