export default {
  data() {
    return {
      activeAccordionItem: null,
      accordionItemScrollHeights: []
    };
  },
  methods: {
    toggleAccordion(index) {
      if (this.activeAccordionItem === index) {
        this.activeAccordionItem = null;
      } else {
        this.activeAccordionItem = index;
      }
    },
    calculateAccordionItemScrollHeights() {
      this.$nextTick(() => {
        const accordionItems = this.$refs.accordionItems;
        this.accordionItemScrollHeights = Array.from(accordionItems).map(
          item => item.querySelector('.photos__accordion-content').scrollHeight
        );
      });
    },
    getAccordionItemStyles(index) {
      const isActive = index === this.activeAccordionItem;
      const maxHeight = isActive ? `${this.accordionItemScrollHeights[index]}px` : '0';

      return {
        maxHeight
      };
    },
    isAccordionItemActive(index) {
      return index === this.activeAccordionItem;
    }
  },
  mounted() {
    window.addEventListener('resize', this.calculateAccordionItemScrollHeights);
    this.calculateAccordionItemScrollHeights();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateAccordionItemScrollHeights);
  },
  template: `
    <div class="photos__accordion" data-aos="fade-right">
      <div
        ref="accordionItems"
        v-for="(item, index) in items"
        :key="index"
        class="photos__accordion-item grid-flow accordion-item"
      >
        <div class="photos__accordion-head">
          <button
            class="photos__btn"
            @click="toggleAccordion(index)"
            :data-content="item.title"
          >
            {{ item.title }}
          </button>
        </div>
        <div
          class="photos__accordion-body"
          :class="{ active: isAccordionItemActive(index) }"
          :style="getAccordionItemStyles(index)"
        >
          <div class="photos__accordion-content">
            <div class="photos__accordion-content-inner">
              <div class="ibg photos__img">
                <img
                  loading="lazy"
                  :src="item.imageSrc"
                  class="image"
                  :width="item.imageWidth"
                  :height="item.imageHeight"
                  :alt="item.imageAlt"
                  @load="calculateAccordionItemScrollHeights"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  computed: {
  },

  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
