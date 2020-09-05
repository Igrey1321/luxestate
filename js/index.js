class DomListener{
  triggerClass (elemName, className) {
    elemName.classList.toggle(className)
  }
}

const burger = new DomListener()

const headerMenu = document.querySelector('.header__menu')
const headerBurger = document.querySelector('.header__burger')
const bodyTeg = document.querySelector('body')

headerBurger.addEventListener('click', (event) => {
  burger.triggerClass(headerMenu, 'active')
  burger.triggerClass(headerBurger, 'active')
  burger.triggerClass(bodyTeg, 'lock')
})

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
});
