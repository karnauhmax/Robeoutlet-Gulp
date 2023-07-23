if (document.querySelector('.header')) {
  const header = document.querySelector('.header');
  let lastScroll = 0;
  const defaultOffset = 200;
  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('header_hide');
  window.addEventListener('scroll', () => {
    if (
      scrollPosition() > lastScroll &&
      !containHide() &&
      scrollPosition() > defaultOffset
    ) {
      //scroll down
      header.classList.add('header_hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
      //scroll up
      header.classList.remove('header_hide');
      header.classList.add('header_show');
    } else if (window.scrollY == 0) {
      header.classList.remove('header_show');
    }

    lastScroll = scrollPosition();
  });
}
