// FIX: 나중에 중복된 코드 합치기 !!!!!!!!!!!!

const eventSlide = new Swiper(".event-banner", {
  loop: true,
  slidesPerView: "2.5",
  centeredSlides: true,
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
  slidesPerView: 5,
  slidesPerGroup: 5, 
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