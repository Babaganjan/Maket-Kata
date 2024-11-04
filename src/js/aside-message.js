const openAsideBtns = document.querySelectorAll('.btn-message')
const closeAsideBtn = document.querySelector('.feedback-menu__btn-close')
const aside = document.querySelector('.feedback-menu__container')

let isAsideOpen = false

const openAsideMessage = (event) => {
  event.preventDefault()
  if (!isAsideOpen) {
    const openAside = document.querySelector('.open-aside--message')

    setTimeout(() => {
      openAside.style.backgroundColor = 'rgb(255, 255, 255)'
      openAside.style.height = '100vh'
      openAside.style.width = '100vw'
      openAside.style.transition = 'background-color .3s ease'
      aside.style.transition = 'transform 0.3s ease'
      aside.style.transform = 'translateX(0)'
      aside.style.boxShadow = '-16px 0px 52px 0px rgba(14, 24, 80, 0.20)'

      isAsideOpen = true
    }, 100) // Увеличьте задержку до 100 мс
    openAside.addEventListener('click', closeAsideMessage)
  }
}

openAsideBtns.forEach((btn) => {
  btn.addEventListener('click', openAsideMessage)
})

const closeAsideMessage = () => {
  const closeAside = document.querySelector('.close-aside--message')
  setTimeout(() => {
    closeAside.style.backgroundColor = 'transparent' // Используйте transparent вместо none
    closeAside.style.height = '0'
    closeAside.style.width = '0' // Исправление: width вместо wight
    aside.style.transition = 'transform 0.3s ease'
    aside.style.transform = 'translateX(100%)'
    aside.style.boxShadow = 'none'
    isAsideOpen = false
  }, 100) // Увеличьте задержку здесь тоже
}

if (aside && closeAsideBtn) {
  closeAsideBtn.addEventListener('click', closeAsideMessage)
}
