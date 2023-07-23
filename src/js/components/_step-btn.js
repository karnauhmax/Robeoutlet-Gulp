export default {
  template: `
  <button class="process__step-btn arrow-link white-arrow-link" :class="{ active: isActive, 'disabled': isDisabled }" :disabled=isDisabled>
    Step {{index}}
  </button>
  `,
  props: {
    index: Number
  },
  computed: {
    isActive() {
      return this.index === this.$root.currentStep;
    },

    isDisabled() {
      return this.index > this.$root.currentStep;
    }
  }
};
