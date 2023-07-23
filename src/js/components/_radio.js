export default {
  template: `
  <label class="checkbox-label text text-300">
  <input
    type="radio"
    :value="value"
    :name="name"
    @change="$emit('value-change', value)"
    :tabindex="tabindex"
  />
  {{ displayValue }}
  <span class="checkbox"></span>
</label>
  `,
  props: {
    label: [String, Number],
    value: Number,
    name: String,
    tabindex: Number,
    showUnits: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    displayValue() {
      return this.showUnits ? `${this.label} mm` : this.label;
    },
  },
};


