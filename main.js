let coll1 = document.getElementsByClassName('collapsible1')
let coll2 = document.getElementsByClassName('collapsible2')

const collapse = (coll) => {
  for (let i = 0; i < coll.length; i++) {
    coll[i].classList.toggle('active')
  }
}

const responsiveHamburger = () => {
  let isShowing = document.getElementsByClassName('main-nav__items')[0]
  let hamburger = document.getElementById('hamburger')
  if (isShowing.style.display === 'block') {
    isShowing.style.display = 'none'
    hamburger.style.backgroundColor = 'transparent'
  } else {
    isShowing.style.display = 'block'
    hamburger.style.backgroundColor = '#0d72b9'
  }
}

let currentSection = 0
// TODO - Trocar Arrays quando tiver produtos a serem exibidos
// const sections = ["top", "projects", "partners", "background"];
const sections = ['top', 'partners', 'background']
const navigate = (updown) => {
  if (
    currentSection + updown >= 0 &&
    currentSection + updown < sections.length
  ) {
    const navlink = document.createElement('a')
    currentSection = currentSection + updown
    navlink.href = `#${sections[currentSection]}`
    navlink.click()
    navlink.remove()
  } else if (currentSection + updown >= sections.length) {
    contactOverlayOn()
  }
}

const sectionNavBar = (i) => {
  currentSection = i
  const navlink = document.createElement('a')
  navlink.href = `#${sections[currentSection]}`
  navlink.click()
  navlink.remove()
}

const contactOverlayOn = () => {
  document.getElementsByClassName('contact-overlay')[0].style.display = 'block'
  document.getElementsByClassName(
    'contact-overlay-options-card'
  )[0].style.display = 'block'
  document.getElementsByClassName('social_media')[0].style.display = 'none'
}

const contactOverlayOff = () => {
  document.getElementsByClassName('contact-overlay')[0].style.display = 'none'
  document.getElementsByClassName(
    'contact-overlay-options-card'
  )[0].style.display = 'none'
  document.getElementsByClassName('social_media')[0].style.display = 'block'
  // if (window.innerWidth >= 800) {
    // document.getElementsByClassName('social_media')[0].style.display = 'block'
  // }
}
