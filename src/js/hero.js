const heroButton = document.querySelector('.hero__button')
const heroArrow = heroButton.querySelector('.hero-arrow')
const buttonText = heroButton.querySelector('span') // Получаем элемент span внутри кнопки
const heroText = document.querySelector('.hero__text')

// Функция для применения стиля высоты в зависимости от ширины экрана
function applyHeight() {
  const width = window.innerWidth // Получаем текущую ширину экрана
  if (heroText.classList.contains('expanded')) {
    // Если блок открыт
    if (width <= 576) {
      heroText.style.maxHeight = '90px' // Для маленьких экранов
    } else {
      heroText.style.maxHeight = '160px' // Для больших экранов
    }
  } else {
    // Если блок закрыт, ставим высоту на 1000px для анимации
    heroText.style.maxHeight = '1000px'
  }
}

export function toggleHeroBtn() {
  // Переключаем класс 'expanded'
  heroText.classList.toggle('expanded')

  // Применяем высоту
  applyHeight()

  if (heroText.classList.contains('expanded')) {
    buttonText.textContent = 'Читать далее' // Меняем текст на "Читать далее"
    heroArrow.style.transform = 'rotate(0deg)' // Исходная позиция стрелки
  } else {
    buttonText.textContent = 'Скрыть' // Меняем текст на "Скрыть"
    heroArrow.style.transform = 'rotate(180deg)' // Поворот стрелки
  }
}

// Применяем высоту при загрузке страницы
applyHeight()

// Привязываем обработчик события к кнопке
heroButton.addEventListener('click', toggleHeroBtn)

// Добавляем обработчик события изменения размера окна
window.addEventListener('resize', applyHeight)
