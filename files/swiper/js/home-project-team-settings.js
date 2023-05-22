const project_team_slider = document.querySelector('.project-team__slider')
if (project_team_slider) {
   new Swiper(project_team_slider, {
      navigation: {
         prevEl: '.project-team__btn-prev',
         nextEl: '.project-team__btn-next',
      },
      simulateTouch: false,
      slideToClickedSlide: true,
      autoHeight: true,
      slidesPerView: 4,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 25,
      //loop: true,
      speed: 800,
      effect: 'slide',
      watchSlidesVisibility: true,

      breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        }
     },
   });
}