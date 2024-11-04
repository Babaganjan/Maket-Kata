// core version + navigation, pagination modules:
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

const swiperClass = '.slider-two'
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
      el: '.repair-pagination',
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

      const paginationElement = document.querySelector('.repair-pagination')
      if (paginationElement) {
        paginationElement.innerHTML = '' // Очищаем пагинацию
      }
    }
    return
  }
}

window.addEventListener('resize', checker)
// checker() // Инициируем проверку при загрузке

// -------------------------------------------------------------------------------------------------------------------
const repairContainer = document.querySelector('.repair-slider')
console.log(repairContainer)
const repairButton = document.querySelector('.repair__btn')
console.log(repairButton)
const repairArrow = repairButton.querySelector('.repair-arrow')
console.log(repairArrow)
const buttonText = repairButton.querySelector('span')
console.log(buttonText)

export function toggleRepairBtn() {
  // Переключаем класс 'expanded'
  repairContainer.classList.toggle('expanded')

  if (repairContainer.classList.contains('expanded')) {
    repairContainer.style.maxHeight = '200px' // Меняем на нужную высоту
    buttonText.textContent = 'Показать все' // Меняем текст на "Читать далее"
    repairArrow.style.transform = 'rotate(0deg)' // Исходная позиция стрелки
  } else {
    repairContainer.style.maxHeight = '1000px' // Устанавливаем на большую высоту для анимации
    buttonText.textContent = 'Скрыть' // Меняем текст на "Скрыть"
    repairArrow.style.transform = 'rotate(180deg)' // Поворот стрелки
  }
}
repairButton.addEventListener('click', toggleRepairBtn)
