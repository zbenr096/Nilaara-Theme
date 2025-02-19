document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.nav-item');

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.style.display = 'block';
        setTimeout(function () {
          menu.style.opacity = '1';
          menu.style.transform = 'translateY(0)';
        }, 10);
      }
    });

    dropdown.addEventListener('mouseleave', function () {
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-10px)';
        setTimeout(function () {
          menu.style.display = 'none';
        }, 300); // Match the duration of the transition
      }
    });
  });
});
class Navbar extends HTMLElement {
  constructor () {
    super()

    // Remove the handleDropdownsBackdrop method as it's no longer needed
    // this.handleDropdownsBackdrop()
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

  handleHeaderReveal () {
    let oldScroll = window.scrollY
    const headerGroup = document.querySelector('#header-group')

    window.addEventListener('scroll', () => {
      const newScroll = window.scrollY
      if (newScroll > oldScroll) {
        if (newScroll > headerGroup.clientHeight) {
          headerGroup.classList.add('hide')
        }
      } else if (newScroll < oldScroll) {
        headerGroup.classList.remove('hide')
      }

      oldScroll = Math.max(window.scrollY, 0)
    })
  }
}
customElements.define('navbar-wrapper', Navbar)
