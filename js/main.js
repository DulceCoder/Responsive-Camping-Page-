const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
 
navLink.forEach(n => n.addEventListener('click', linkAction))

const bgHeader = () => {
    const header = document.getElementById('header')
    this.scroll >= 50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}

window.addEventListener('scroll', bgHeader) 

gsap.from('.home-img-2', 1.2, {opacity: 0, y: 200, delay: .1})
gsap.from('.home-img-3', 1.2, {opacity: 0, y: 200, delay: .5})
gsap.from('.home-data', 1.2, {opacity: 0, y: -60, delay: 1})
gsap.from('.home-bird-1', 1.2, {opacity: 0, x: -80, delay: 1.1})
gsap.from('.home-bird-2', 1.2, {opacity: 0, x: 80, delay: 1.2})
gsap.from('.home-img-1', 1.2, {opacity: 0, y: 200, delay: 1.2}) 
gsap.from('.home-img-4', 1.2, {opacity: 0, x: 200, delay: 1.3})