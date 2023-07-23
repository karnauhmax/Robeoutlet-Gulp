export default {
  data() {
    return {
      value: 0,
    };
  },
  template: `

  <div class="process__counter counter">
    <button class="minus" @click="decrementValue">
      <svg width="8" height="10" viewBox="0 0 3 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H2.628V0.96H0V0Z" fill="black" />
      </svg>
    </button>
    <input :value="value" type="number" class="input-reset" @input="updateValue" />
    <button class="plus" @click="incrementValue">
      <svg width="10" height="10" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.27599 6.72V0H4.17599V6.72H3.27599ZM0.359985 3.804V2.904H7.07999V3.804H0.359985Z" fill="black" />
      </svg>
    </button>
  </div>

  `,
  methods: {
    incrementValue() {
      this.value++;
      this.$emit("value-change", this.value);
    },

    decrementValue() {
      if (this.value > 0) {
        this.value--;
        this.$emit("value-change", this.value);
      }
    },

    updateValue(event) {
      this.value = Number(event.target.value);
      this.$emit("value-change", this.value);
    },
  },
};
