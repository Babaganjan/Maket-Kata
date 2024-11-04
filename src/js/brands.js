// core version + navigation, pagination modules:
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

const swiperClass = '.slider-one'
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
      el: '.brands-pagination',
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

      const paginationElement = document.querySelector('.brands-pagination')
      if (paginationElement) {
        paginationElement.innerHTML = '' // Очищаем пагинацию
      }
    }
    return
  }
}

window.addEventListener('resize', checker)
checker() // Инициируем проверку при загрузке

// -------------------------------------------------------------------------------------------------------------------

const brandsContainer = document.querySelector('.brands-slider')

const brandsButton = document.querySelector('.brands__btn')

const brandsArrow = brandsButton.querySelector('.brands-arrow')

const buttonText = brandsButton.querySelector('span')

export function toggleBrandsBtn() {
  // Переключаем класс 'expanded'
  brandsContainer.classList.toggle('expanded')

  if (brandsContainer.classList.contains('expanded')) {
    brandsContainer.style.maxHeight = '200px' // Меняем на нужную высоту
    buttonText.textContent = 'Показать все' // Меняем текст на "Читать далее"
    brandsArrow.style.transform = 'rotate(0deg)' // Исходная позиция стрелки
  } else {
    brandsContainer.style.maxHeight = '1000px' // Устанавливаем на большую высоту для анимации
    buttonText.textContent = 'Скрыть' // Меняем текст на "Скрыть"
    brandsArrow.style.transform = 'rotate(180deg)' // Поворот стрелки
  }
}
brandsButton.addEventListener('click', toggleBrandsBtn)
