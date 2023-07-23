export default {
  template: `
  <button class="select__option" :class="{'disabled': isDisabled }">step {{index}}</button>
  `,
  props: {
    index: Number
  },
  computed: {
    isDisabled() {
      return this.$root.currentStep < this.index;
    },
  }
}
