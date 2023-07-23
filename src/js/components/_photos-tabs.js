export default {
  template: `
      <div class="photos__info grid-flow">
      <div class="photos__info-head">
      <h2 class="photos__title section-title">
        inspiration photos
      </h2>
      </div>
          <div class="photos__info-body grid-flow">
            <button v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)" :class="{ 'tabs-btn-active': isActive(index) }" class="photos__btn tabs-btn">
            {{ tab.name }}
          </button>
          </div>
      </div>
      <div class="photos__content" v-for="(tab, index) in tabs" :key="index" v-show="isActive(index)">
        <div class="ibg photos__img">
          <img loading="lazy" :src="tab.renderedImage.path" class="image" width="tab.renderedImage.width" height="tab.renderedImage.width" :alt="tab.name">
        </div>
      </div>
  `,
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    selectTab(index) {
      this.activeTab = index;
    },
    isActive(index) {
      return this.activeTab === index;
    },
    isDisabled(index) {
      return index > this.activeTab;
    },
  },
};
