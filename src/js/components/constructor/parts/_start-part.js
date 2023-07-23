import input from "../../_input"
import CustomRadio from "../../_radio"
import ConstructorSteps from "../_constructor-steps"


export default {
  data() {
    return {
      width: null,
      height: null,
      type: null,
      steps: ConstructorSteps,
      widthAboveThreshold: true,
    }
  },
  template: `
  <div class="process__img ibg">
 <img loading="lazy" :src="img" class="image" width="241" height="504" alt="Shelf">
</div>
<div class="process__info grid">
 <h2 class="uppercase-bold section-title process__step-title">
  {{title}}
 </h2>
  <div class="process__checkboxes grid">
        <p class="text">
          <strong>
            Top Shelf height H mm
          </strong>
        </p>
        <CustomRadio
          v-for="(checkbox, index) in checkboxes"
          :key="index"
          :value="checkbox.value"
          :label="checkbox.value"
          name="Top Shelf height H mm"
          @value-change="handleRadioValueChange"
        />

      </div>
      <div class="process__checkboxes">
      <p class="text">
          <strong>
            Select Hanging Rail type
          </strong>
        </p>
        <CustomRadio
        v-for="(item, index) in hangingRail"
        :key="index"
        :value="item.value"
        :label="item.name"
        :showUnits="item.showUnits"
        name="Hanging Rail"
        @value-change="handleHangingRailChange"
      />
      </div>
      <p v-if="!widthAboveThreshold" class="warning">Initial Width Must be at least 500mm</p>
      <CustomInput labelClasses="process__label inserts-label grid-flow" inputClasses="inserts-input" title="Total width, wall to wall, mm" v-model:modelValue="width"></CustomInput>
 <p class="text text-300 process__note">{{notice}}</p>
  <div class="process__step-buttons">
  <button class="arrow-link next-btn next-btn-dark white-arrow-link" :class="{disabled: isDisabled}" :disabled="isDisabled" @click="nextStep">Select Additional Units</button>
  <button class="arrow-link next-btn next-btn-dark white-arrow-link" :class="{disabled: isDisabled}" :disabled="isDisabled" @click="proceedToCart">Proceed To Add To Cart</button>
  </div>
</div>




`,
  components: {
    "CustomInput": input,
    "CustomRadio": CustomRadio,

  },
  methods: {
    pushData() {
      this.$root.selectedObj.metrics = { height: this.height, width: this.width, type: this.type };
      console.log(this.$root.selectedObj);
    },

    handleRadioValueChange($event) {
      this.height = $event
    },

    handleHangingRailChange($event) {
      this.type = $event;
      console.log(this.type);
    },

    isValueAboveThreshold() {
      return this.width >= 500 ? true : false;
    },


    nextStep() {
      if (this.isValueAboveThreshold()) {
        this.widthAboveThreshold = true;
        this.pushData();
        this.$root.currentStep++;
      } else {
        this.widthAboveThreshold = false;
      }

      console.log(this.n);
    },

    proceedToCart() {
      this.pushData();
      const lastStepIndex = this.steps.length - 1;
      this.$root.currentStep = lastStepIndex + 1;
    }
  },
  computed: {
    isDisabled() {
      return !this.width || !this.height || !this.type;
    },
  },
  props: {
    checkboxes: Array,
    img: String,
    notice: String,
    title: String,
    label: String,
    hangingRail: Array,
  },
}
