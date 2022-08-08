window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  const navigation = document.querySelector('nav')
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

const buttonColor = document.querySelector('#color-button')
const changeColorMobile = document.querySelector('.change-theme-mobile')

buttonColor.addEventListener('click', changeColor)
changeColorMobile.addEventListener('click', changeColor)

function changeColor(event) {
  event.preventDefault()
  let docStyle = getComputedStyle(document.documentElement)
  let hueStr = docStyle.getPropertyValue('--hue')
  let hueNumberCurrent = Number.parseInt(hueStr)
  hueNumberCurrent += 150

  document.documentElement.style.setProperty('--hue', hueNumberCurrent)
}

const menu = document.querySelector('.menu')
const socialLinks = document.querySelector('.social-links')

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700'
}).reveal(`
    #home, 
    #home img, 
    #home .stat,
    #services,
    #services header,
    #services .cards,
    #services .card,
    #about,
    #about header,
    #about .content`)
