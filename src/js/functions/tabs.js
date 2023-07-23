class Tab {
  constructor(tabSelector) {
    this.tabContainer = document.querySelector(tabSelector);
    this.tabsBtn = this.tabContainer.querySelectorAll('.tabs-btn');
    this.tabsContent = this.tabContainer.querySelectorAll('.tabs-content');
  }

  renderTab() {
    this.tabContainer.addEventListener('click', e => {
      if (e.target.classList.contains('tabs-btn')) {
        const tabsHandler = path => {
          this.tabsContent.forEach(el => {
            el.classList.remove('tabs-content-active');
          });
          this.tabContainer
            .querySelector(`[data-tabs-target="${path}"]`)
            .classList.add('tabs-content-active');
        };

        const tabsPath = e.target.dataset.tabsPath;
        this.tabsBtn.forEach(el => {
          el.classList.remove('tabs-btn-active');
        });
        document
          .querySelector(`[data-tabs-path="${tabsPath}"]`)
          .classList.add('tabs-btn-active');
        tabsHandler(tabsPath);
      }
    });
  }
}

export default Tab;
