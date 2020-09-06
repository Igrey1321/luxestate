const [locationOne, appartment, contact, locationButton, appartmentButton, contactButton] = ['location'
  , 'appartment', 'contact', 'location__button', 'appartment__button', 'contact__button']
    .map((item) => document.getElementById(item));

const [headerMenu, headerBurger, bodyTeg] = ['.header__menu', '.header__burger', 'body']
  .map((item) => document.querySelector(item));

class DomListener {
  triggerClass(elemName, className) {
    elemName.classList.toggle(className)
  }
}

// ===================================

const step = 1
const time = 10000

function outNum(num, elem) {
  const element = document.querySelector('#' + elem)
  let n = 0
  const t = Math.round(time / (num/step))
  const interval = setInterval(() => {
    n = n + step
    if (n >= num) {
      clearInterval(interval)
    }
    element.innerHTML = n
  }, t)
}

outNum(748, 'appartments')
outNum(3854, 'clients')
outNum(24, 'employees')
outNum(14, 'awards')

// ====================================

const burger = new DomListener()

headerBurger.addEventListener('click', (event) => {
  burger.triggerClass(headerMenu, 'active')
  burger.triggerClass(headerBurger, 'active')
  burger.triggerClass(bodyTeg, 'lock')
})
// ====================================================

locationOne.onmouseover = function () {
  locationButton.style = `
  border-bottom: 3px solid #fff;
  color: #fff;
  transition: 0.4s all;
  `;
}
locationOne.onmouseout = function () {
  locationButton.style = `
  border-bottom: 3px solid #1f373d;
  color: #1f373d;
  transition: 0.4s all;
  `;
}
appartment.onmouseover = function () {
  appartmentButton.style = `
  border-bottom: 3px solid #fff;
  color: #fff;
  transition: 0.4s all;
  
  `;
}
appartment.onmouseout = function () {
  appartmentButton.style = `
  border-bottom: 3px solid #1f373d;
  color: #1f373d;
  transition: 0.4s all;
  `;
}
contact.onmouseover = function () {
  contactButton.style = `
  border-bottom: 3px solid #fff;
  color: #fff;
  transition: 0.4s all;
  `;
}
contact.onmouseout = function () {
  contactButton.style = `
  border-bottom: 3px solid #1f373d;
  color: #1f373d;
  transition: 0.4s all;
  `;
}
// =========================================================

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});
