function controlMobileMenu() {
  const open = document.getElementById('mobile-nav')
  const close = document.getElementById('close-menu')
  const portfolio = document.getElementById('mobile-portfolio')
  const about = document.getElementById('mobile-about')
  const contact = document.getElementById('mobile-contact')
  function openMenu() {
    const menu = document.querySelector('#mobile-menu')
    menu.classList.remove('invisible')
    menu.classList.add('visible')
  }
  function closeMenu() {
    const menu = document.querySelector('#mobile-menu')
    menu.classList.remove('visible')
    menu.classList.add('invisible')
  }
  open.addEventListener('click', () => {
    openMenu(); 
  })
  close.addEventListener('click', () => {
    closeMenu();
  })
  portfolio.addEventListener('click', () => {
    closeMenu();
  })
  about.addEventListener('click', () => {
    closeMenu();
  })
  contact.addEventListener('click', () => {
    closeMenu();
  })
}
controlMobileMenu();