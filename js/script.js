function controlMobileMenu() {
    const open = document.getElementById('mobile-nav')
    const close = document.getElementById('close-menu')
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
}
controlMobileMenu();