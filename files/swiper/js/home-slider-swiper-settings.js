/*if (document.querySelectorAll('.testimonials__slide').length < 2) {
   document.getElementById('testimonials-wrap-counter-arrows').remove();
}*/
const testimonials_slider = document.querySelector('.home-fs-slider')
if (testimonials_slider) {
   new Swiper(testimonials_slider, {
      navigation: {
         prevEl: '.home-fs-slider__sw-btn-prev',
         nextEl: '.home-fs-slider__sw-btn-next',
      },
      simulateTouch: false,
      slideToClickedSlide: true,
      //autoHeight: true,
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 0,
      loop: true,
      speed: 1200,
      effect: 'slide',
      autoplay: {
         // Пауза между прокруткой
         delay: 8000,

         // Отключить после ручного переключения
         disableOnInteraction: false,
      },
      // Отключить предзагрузка картинок
      preloadImages: false,

      // Lazy Loading (подгрузка картинок)
      lazy: {
         // Подгружать на старте переключения слайда
         loadOnTransitionStart: false,

         // Подгрузить предыдущую и следующую картинку
         loadPrewNext: true,
      },
      // Слежка за видимыми слайдами
      watchSlidesProgress: true,

      // Добавление класса видимым слайдам
      watchSlidesVisibility: true,
   });
}