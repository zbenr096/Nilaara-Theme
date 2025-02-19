/*
  © 2024 KondaSoft
  https://www.kondasoft.com
*/

class Navbar extends HTMLElement {
  constructor () {
    super()

    this.handleDropdownsBackdrop()
    this.handleHeaderReveal()
    this.adjustOffcanvasMenu()
  }

  adjustOffcanvasMenu () {
    const offcanvasMenu = document.querySelector('#offcanvas-menu')
    const navbarMobile = document.querySelector('#navbar-mobile')

    offcanvasMenu?.addEventListener('show.bs.offcanvas', () => {
      const navbarSpacing = document.querySelector('#navbar-mobile').getBoundingClientRect().bottom
      offcanvasMenu.style.height = `${window.innerHeight - navbarSpacing}px`

      navbarMobile.querySelector('.svg-icon-menu')?.classList.add('svg-icon-menu-close')
    })

    offcanvasMenu?.addEventListener('hide.bs.offcanvas', () => {
      navbarMobile.querySelector('.svg-icon-menu')?.classList.remove('svg-icon-menu-close')
    })
  }

  
      oldScroll = Math.max(window.scrollY, 0)
    })
  }

  ha
}
customElements.define('navbar-wrapper', Navbar)
