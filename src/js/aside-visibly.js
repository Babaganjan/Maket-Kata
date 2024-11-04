const openAsideBtn = document.querySelector('.header__button')
const closeAsideBtn = document.querySelector('.header-btn')
const aside = document.querySelector('.burger-menu__container')

// Флаг для отслеживания состояния aside
let isAsideOpen = false

// Открытие aside
openAsideBtn.addEventListener('click', () => {
  if (window.innerWidth < 1440) {
    if (!isAsideOpen) {
      const openAside = document.querySelector('.open-aside')
      // После этого выезжаем
      setTimeout(() => {
        openAside.style.backgroundColor = 'rgb(255, 255, 255)'
        openAside.style.height = '100vh'
        openAside.style.width = '100vw'
        openAside.style.transition = 'backgroundColor .3s ease'
        aside.style.transition = 'transform 0.3s ease' // добавим плавный переход
        aside.style.transform = 'translateX(0)' // Везём в видимую область
        aside.style.boxShadow = '16px 0px 52px 0px rgba(14, 24, 80, 0.20)' // Добавляем тень справа

        isAsideOpen = true // Отметить, что aside открыт
      }, 10) // Небольшая задержка, чтобы анимация сработала
      openAside.addEventListener('click', closeAside)
    }
  }
})

// Закрытие aside
const closeAside = () => {
  const closeAside = document.querySelector('.close-aside')
  setTimeout(() => {
    closeAside.style.backgroundColor = 'none'
    closeAside.style.height = '0'
    closeAside.style.wight = '0'
    aside.style.transition = 'transform 0.3s ease' // добавим плавный переход
    aside.style.transform = 'translateX(-100%)' // Складываем за пределы экрана
    aside.style.boxShadow = 'none' // Убираем тень при закрытии
    isAsideOpen = false // Отметить, что aside закрыт
  }, 10) // Небольшая задержка, чтобы анимация сработала
}

// Закрытие aside через кнопку закрытия
if (aside) {
  closeAsideBtn.addEventListener('click', closeAside)
}
