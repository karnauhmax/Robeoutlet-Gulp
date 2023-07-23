export default {
  template: `
  <label :class="['grid', labelClass]">
    <span class="text text-500">{{title}}, мм</span>
    <input :value="modelValue" @input="$emit('update:modelValue', Number($event.target.value))" type="number" :class="['input-reset', 'custom-input', inputClass]" placeholder="0 mm">
  </label>
  `,
  props: {
    modelValue: {
      type: Number
    },
    title: String,
    labelClasses: {
      type: String,
      default: ''
    },
    inputClasses: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputClass() {
      return this.inputClasses;
    },

    labelClass() {
      return this.labelClasses;
    }
  },
}
