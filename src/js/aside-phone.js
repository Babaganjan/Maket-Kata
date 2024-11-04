const openAsideBtns = document.querySelectorAll('.btn-call')
const closeAsideBtn = document.querySelector('.phone-menu__btn-close')
const aside = document.querySelector('.phone-menu__container')

let isAsideOpen = false

const openAsidePhone = (event) => {
  event.preventDefault()
  if (!isAsideOpen) {
    const openAside = document.querySelector('.open-aside--phone')

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
    openAside.addEventListener('click', closeAsidePhone)
  }
}

openAsideBtns.forEach((btn) => {
  btn.addEventListener('click', openAsidePhone)
})

const closeAsidePhone = () => {
  const closeAside = document.querySelector('.close-aside--phone')
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
  closeAsideBtn.addEventListener('click', closeAsidePhone)
}
