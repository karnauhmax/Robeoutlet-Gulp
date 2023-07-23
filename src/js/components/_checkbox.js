export default {
  template: `
  <label class="checkbox-label text text-300">
  <input
    type="checkbox"
    :value="value"
    :name="name"
    :checked="checked"
    @input="handleChange($event)"
    ref="checkbox"
  />
  {{label}}
  <span class="checkbox"></span>
</label>
  `,
  props: {
    value: [String, Boolean, Number],
    name: String,
    label: [String, Number],
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('update:checked', value.target.checked);
    }
  }
};


