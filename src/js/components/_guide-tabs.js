
export default {
  props: {
    videos: {
      type: Array,
      required: true
    },
    brochures: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tabs: ['video', 'brochure'],
      activeTab: 'video'
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }
  },

  template: `
    <div class="guide__head">
    <h2 class="guide__title section-title">
      DIY Guide - how to measure and install
    </h2>
    <div class="guide__btns">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="guide__btn"
        :class="{'tabs-btn-active': activeTab === tab}"
        @click="changeTab(tab)"
      >
        {{ tab }}
      </button>
      </div>

      <div class="guide-slider-buttons active" data-slider-arrows="video">
      <button class="guide-slider-prev guide-slider-button test-1" data-slider-prev="video">
       <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.8417 30.3536 3.64644L27.1716 0.464461C26.9763 0.269199 26.6597 0.269199 26.4645 0.464461C26.2692 0.659724 26.2692 0.976306 26.4645 1.17157L29.2929 3.99999L26.4645 6.82842C26.2692 7.02368 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM8.74228e-08 4.5L30 4.49999L30 3.49999L-8.74228e-08 3.5L8.74228e-08 4.5Z" fill="#303030"/>
       </svg>
      </button>
      <button class="guide-slider-next guide-slider-button test-2" data-slider-next="video">
       <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.8417 30.3536 3.64644L27.1716 0.464461C26.9763 0.269199 26.6597 0.269199 26.4645 0.464461C26.2692 0.659724 26.2692 0.976306 26.4645 1.17157L29.2929 3.99999L26.4645 6.82842C26.2692 7.02368 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM8.74228e-08 4.5L30 4.49999L30 3.49999L-8.74228e-08 3.5L8.74228e-08 4.5Z" fill="#303030"/>
       </svg>
      </button>
     </div>
     <div class="guide-slider-buttons" data-slider-arrows="brochure">
      <button class="guide-slider-prev guide-slider-button test-3" data-slider-prev="brochure">
       <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.8417 30.3536 3.64644L27.1716 0.464461C26.9763 0.269199 26.6597 0.269199 26.4645 0.464461C26.2692 0.659724 26.2692 0.976306 26.4645 1.17157L29.2929 3.99999L26.4645 6.82842C26.2692 7.02368 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM8.74228e-08 4.5L30 4.49999L30 3.49999L-8.74228e-08 3.5L8.74228e-08 4.5Z" fill="#303030"/>
       </svg>
      </button>
      <button class="guide-slider-next guide-slider-button test-4" data-slider-next="brochure">
       <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.8417 30.3536 3.64644L27.1716 0.464461C26.9763 0.269199 26.6597 0.269199 26.4645 0.464461C26.2692 0.659724 26.2692 0.976306 26.4645 1.17157L29.2929 3.99999L26.4645 6.82842C26.2692 7.02368 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM8.74228e-08 4.5L30 4.49999L30 3.49999L-8.74228e-08 3.5L8.74228e-08 4.5Z" fill="#303030"/>
       </svg>
      </button>
     </div>
    </div>

    <div v-show="activeTab === 'video'" class="tabs-content tabs-content-active">
      <div class="swiper guide__videos">
        <div class="swiper-wrapper">
          <div class="swiper-slide guide__videos-item" v-for="video in videos" :key="video.title">
            <div class="guide__videos-media">
              <div class="guide__videos-video"></div>
              <button class="guide__videos-btn"></button>
            </div>
            <div class="guide__videos-info">
              <h3 class="guide__videos-title">{{ video.title }}</h3>
              <p class="guide__videos-descr text text-300">{{ video.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="activeTab === 'brochure'" class="tabs-content" data-tabs-target="brochure">
      <div class="swiper guide__brochures">
        <div class="swiper-wrapper">
          <div class="swiper-slide guide__brochures-item" v-for="brochure in brochures" :key="brochure">
            <p class="text text-300">{{ brochure }}</p>
          </div>
        </div>
      </div>
    </div>
  `
};
