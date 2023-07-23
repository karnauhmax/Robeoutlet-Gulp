const menuLinks = document.querySelectorAll("[data-goto]");
const menu = document.querySelector(".header__info");
const body = document.body;
const burger = document.querySelector('.burger');

menuLinks.forEach(link => {
  if (link.dataset.goto) {
    const elementToScroll = document.querySelector(link.dataset.goto);
    if (elementToScroll) {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          body.classList.remove('dis-scroll');
          burger.classList.remove('active');
          burger.setAttribute('aria-expanded', false);
          burger.setAttribute('aria-label', 'Open Menu')
        }

        elementToScroll.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      })
    }
  }
})
