class DomListener{
  triggerClass (elemName, className) {
    elemName.classList.toggle(className)
  }
}

const $ = new DomListener()

const headerMenu = document.querySelector('.header__menu')
const headerBurger = document.querySelector('.header__burger')
const bodyTeg = document.querySelector('body')

headerBurger.addEventListener('click', (event) => {
  $.triggerClass(headerMenu, 'active')
  $.triggerClass(headerBurger, 'active')
  $.triggerClass(bodyTeg, 'lock')
})