export default {
  data() {
    return {
      activeAccordionItem: null,
      accordionItemHeights: [],
      isLoading: true,
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
    calculateAccordionItemHeights() {
      this.$nextTick(() => {
        const accordionItems = this.$refs.accordionItems;
        this.accordionItemHeights = Array.from(accordionItems).map((item) => {
          const content = item.querySelector('.faq__item-content');
          return content ? content.scrollHeight : 0;
        });
      });
    },
    getAccordionItemMaxHeight(index) {
      if (index === this.activeAccordionItem) {
        return this.accordionItemHeights[index] + 'px';
      } else {
        return '0';
      }
    },
    isAccordionItemActive(index) {
      return index === this.activeAccordionItem;
    },
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    if (this.items && this.items.length > 0) {
      this.isLoading = false;
      this.calculateAccordionItemHeights();
    }
  },
  watch: {
    items(newItems) {
      if (newItems && newItems.length > 0) {
        this.isLoading = false;
        this.calculateAccordionItemHeights();
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateAccordionItemHeights);
  },
  template: `
    <div v-if="!isLoading" class="faq__questions">
      <div
        ref="accordionItems"
        v-for="(item, index) in items"
        :key="index"
        class="faq__item accordion-item"
        :class="{ active: isAccordionItemActive(index) }"
      >
        <button
          class="faq__item-head accordion-item__head"
          @click="toggleAccordion(index)"
        >
          {{ item.faqs_title }}
        </button>
        <div
          class="faq__item-body accordion-item__body"
          :style="{ maxHeight: getAccordionItemMaxHeight(index) }"
        >
          <div class="faq__item-content">
            <p class="faq__item-descr text text-300">{{ item.faqs_descr }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Loading... <!-- or you can display a loading spinner or message here -->
    </div>
  `,
  computed: {},
};
