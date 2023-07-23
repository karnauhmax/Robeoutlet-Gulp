if (document.querySelector('.preloader')) {
  const preloader = document.querySelector('.preloader');
  const body = document.body;
  const header = document.querySelector('.header');

  const scrollbarSize = window.innerWidth - body.offsetWidth + 'px';

  const addPadding = () => {
    header.style.paddingRight = scrollbarSize;
    body.style.paddingRight = scrollbarSize;
  };

  const removePadding = () => {
    header.style.paddingRight = null;
    body.style.paddingRight = null;
  };

  const preloaderPlayed = () => {
    return sessionStorage.getItem('preloaderPlayed');
  };

  if (!preloaderPlayed()) {
    console.log(123);
    window.addEventListener('load', () => {
      body.classList.add('locked');
      addPadding();
      setTimeout(() => {
        removePadding();
        body.classList.remove('locked');
        preloader.classList.remove('active');
      }, 2600);

      sessionStorage.setItem('preloaderPlayed', true);
    });
  } else {
    preloader.classList.remove('active');
  }
}
