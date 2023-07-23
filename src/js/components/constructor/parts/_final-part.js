import calculatePrice from "../../_constructor-calculator";
export default {
  data() {
    return {
      images: [],
    }
  },
  components: {
    'draggable': window['vuedraggable']
  },

  template: `
  <div class="process__step process__step-final grid" data-show-selected="false">
    <p class="uppercase-bold section-title process__step-title">
      {{ title }}
    </p>
    <form id="confirm-selected-wardrobe-form" class="process__finale grid">
    <div class="process__finale-wrapper">
      <div class="process__result" :style="{width: parentDivWidth}">
        <div class="topshelf">
        </div>
        <draggable v-model="images" tag="div" class="process__result-items" item-key="id">
          <template #item="{element: img}">
            <div :class="{'process__result-item': img.imgResult, 'empty-space': !img.imgResult}">
             <template v-if="img.imgResult">
              <img :src="img.imgResult">
              <span class="process__result-metric">{{img.width}} mm</span>
              <span class="line"></span>
             </template>

            </div>

          </template>
        </draggable>
        <div class="process__result-gap grid">
          <p>250 mm gap</p>
        </div>
      </div>
      </div>
      <div class="process__finale-body grid">
        <div class="process__unit text text-300">
          <p>Width</p>
          <p>{{ width }} мм</p>
        </div>
        <div class="process__unit text text-300">
          <p>Height</p>
          <p>{{ height }} мм</p>
        </div>
        <p v-if="!isOverWidth" class="text text-500 process-constructor__notice">
          {{ notice }}
        </p>
        <p class="process__finale-total uppercase-bold text ">
          <span v-if="!isOverWidth">Total:  {{ priceTotal }}$ INCL GST</span>
          <span v-else>The initial wardrobe width exceeds the width of selected units, please go back and update your order</span>
        </p>
        <button type="submit" form="confirm-selected-wardrobe-form" :class="{ disabled: isOverWidth }" class="uppercase-bold arrow-link dark-arrow-link process__finale-btn"> Add to cart</button>
      </div>
    </form>
  </div>
`,

// <div v-if="!emptySpaceVisibility" class="empty-space"></div>


  computed: {
    selected() {
      return this.$root.selectedObj;
    },

    width() {
      return this.selected.metrics ? this.selected.metrics.width : "N / A";
    },

    height() {
      return this.selected.metrics ? this.selected.metrics.height : "N / A";
    },

    type() {
      return this.selected.metrics ? this.selected.metrics.type : "N / A";
    },

    parentDivWidth() {
      if (this.width >= this.overallWidth) {
        return this.width / 3.69 + 'px';
      } else {
        return "100%";
      }
    },

    emptySpaceVisibility() {
      return this.overallWidth >= this.width;
    },

    units() {
      return this.selected.units ? this.selected.units : [];
    },

    overallWidth() {
      const overallWidth = this.units.reduce((acc, unit) => {
        return acc + unit.items.reduce((acc2, item) => {
          return acc2 + item.width * item.quantity;
        }, 0);
      }, 0);

      return overallWidth;
    },

    isOverWidth() {
      return this.overallWidth > this.width;
    },

    priceTotal() {
      let price = 0;
      if (this.units.length) {
        this.units.filter(unit => unit.items.length).forEach(unit => {
          price += calculatePrice(this.width, this.height, this.type, unit.items, unit.itemTable, unit.id);
        })
      } else {
        price = calculatePrice(this.width, this.height, this.type);
      }
      return price;
    }
  },

  watch: {
    units: {
      immediate: true,
      handler() {
        this.images = this.units.flatMap(unit =>
          unit.items.flatMap(item =>
            Array.from({ length: item.quantity }, () => ({ img: unit.img, width: item.width, imgResult: unit.resultImg }))
          )
        );


        if (this.overallWidth < this.width) {
          this.images.push({'empty-space': true });
        }

      }
    }
  },
  methods: {
    calculatedWidth(itemWidth) {
      return `${Math.floor(itemWidth / this.width * 100)}%`;
    }
  },
  props: {
    img: String,
    notice: String,
    title: String,
  }
}

{/* <svg width="20" height="20" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.49709 0.823223C2.39946 0.725592 2.24117 0.725592 2.14354 0.823223L0.552546 2.41421C0.454915 2.51184 0.454915 2.67014 0.552546 2.76777C0.650177 2.8654 0.808468 2.8654 0.906099 2.76777L2.32031 1.35355L3.73453 2.76777C3.83216 2.8654 3.99045 2.8654 4.08808 2.76777C4.18571 2.67014 4.18571 2.51184 4.08808 2.41421L2.49709 0.823223ZM2.14354 11.1768C2.24117 11.2744 2.39946 11.2744 2.49709 11.1768L4.08808 9.58579C4.18571 9.48816 4.18571 9.32986 4.08808 9.23223C3.99045 9.1346 3.83216 9.1346 3.73453 9.23223L2.32031 10.6464L0.906099 9.23223C0.808468 9.1346 0.650177 9.1346 0.552546 9.23223C0.454915 9.32986 0.454915 9.48816 0.552546 9.58579L2.14354 11.1768ZM2.07031 1L2.07031 11L2.57031 11L2.57031 1L2.07031 1Z" fill="#303030"/>
</svg> */}








