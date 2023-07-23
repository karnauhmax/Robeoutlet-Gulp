import Tab from '../functions/tabs';

if (document.querySelector('.guide')) {
  const buttonsCollection = document.querySelectorAll(
    '[data-slider-arrows]'
  );

  new Tab('.guide').renderTab();

  const guide = document.querySelector('.guide');

  console.log(buttonsCollection);

  guide.addEventListener('click', e => {
    if (e.target.closest('.tabs-btn')) {
      buttonsCollection.forEach(buttonsDiv => {
        buttonsDiv.classList.remove('active');
      });

      const btnData = e.target.dataset.tabsPath;
      const self = e.currentTarget;

      self
        .querySelector(`[data-slider-arrows=${btnData}]`)
        .classList.add('active');
    }
  });
}
