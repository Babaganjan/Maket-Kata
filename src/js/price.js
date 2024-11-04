// core version + navigation, pagination modules:
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

const swiperClass = '.slider-three'
let swiper = null

export const initSwiper = (slidesPerView) => {
  // Уничтожаем предыдущий слайдер, если он существует
  if (swiper) {
    swiper.destroy(true, true)
  }

  swiper = new Swiper(swiperClass, {
    modules: [Navigation, Pagination],
    loop: true,
    spaceBetween: 16,
    slidesPerView: slidesPerView,
    pagination: {
      el: '.price-pagination',
      clickable: true
    }
  })
}

const checker = () => {
  const width = window.innerWidth

  if (width < 460) {
    initSwiper(1.23) // Для ширины меньше 460px
  } else if (width < 640) {
    initSwiper(1.7) // Для ширины от 460px до 639px
  } else if (width < 768) {
    initSwiper(2.5) // Для ширины от 640px до 767.9px
  } else {
    // Если ширина 768px и выше, уничтожаем слайдер
    if (swiper) {
      swiper.destroy(true, true)
      swiper = null

      const paginationElement = document.querySelector('.price-pagination')
      if (paginationElement) {
        paginationElement.innerHTML = '' // Очищаем пагинацию
      }
    }
    return
  }
}

window.addEventListener('resize', checker)
checker() // Инициируем проверку при загрузке
