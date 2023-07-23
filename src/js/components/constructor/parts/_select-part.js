import ConstructorItem from "../items/_constructor-item"

export default {
  data() {
    return {
      selectedValues: [],
      notice: false,
    }
  },
  components: {
    'ConstructorItem': ConstructorItem
  },
  template: `
  <div class="process__wrapper grid">

  <div class="process__items">
  <ConstructorItem v-for="(unit, index) in units"
    :img="unit.img"
    :title="unit.name"
    :counters="unit.counters"
    :checkboxes="unit.checkboxes"
    :table="unit.itemTable"
    :id="unit.id"
    :key="unit.id"
    :resultImg="unit.resultImg"
    @selected-value-changed="handleSelectedValueChange"
  />
</div>
  <button class="arrow-link next-btn next-btn-light white-arrow-link" @click="pushSelectedValues">Next Step</button>

  <p v-if="notice" class="warning">The initial wardrobe width exceeds the width of selected units, please go back and update your order</p>
  </div>

  `,

  props: {
    img: String,
    title: String,
    units: Array,
    resultImg: String,
  },

  computed: {
    overallWidth() {
      const overallWidth = this.units.reduce((acc, unit) => {
        return acc + unit.items.reduce((acc2, item) => {
          return acc2 + item.width * item.quantity;
        }, 0);
      }, 0);

      return overallWidth;
    },
  },

  methods: {
    handleSelectedValueChange(newSelectedValue) {
      this.selectedValues.push(newSelectedValue);
    },
    pushSelectedValues() {
      const filtered = this.selectedValues.filter(item => item.items.length);
      this.$root.selectedObj.units = [...new Set(filtered)];

      const overallWidth = [...new Set(filtered)].reduce((acc, unit) => {
        return acc + unit.items.reduce((acc2, item) => {
          return acc2 + item.width * item.quantity;
        }, 0);
      }, 0)

      if (overallWidth <= this.$root.selectedObj.metrics.width) {
          this.notice = false;
          this.$root.currentStep++;
      } else {
        this.notice = true;
      }
    }
  }
}
