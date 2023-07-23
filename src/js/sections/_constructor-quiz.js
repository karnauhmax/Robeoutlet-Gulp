import selectedArr from "../components/selected/_selected";
import steps from "../components/constructor/_constructor-steps";
import customSelect from "../components/_custom-select";
import selectedComponent from "../components/selected/_selected-component";
import stepBtn from "../components/_step-btn";
import step from "../components/constructor/_constructor-step";
import { useMainStore } from "../stores/store";

const { createApp } = Vue;
const { createPinia, mapState, mapActions } = Pinia;

const pinia = createPinia();


const app = createApp({
  data() {
    return {
      stepBtns: ['Step 1', 'Step 2', 'Step 3'],
      currentStep: 1,
      steps,
      selectedObj: {},
      images: [
        'img/svg/4-drawers-3-shelving-units.svg',
        'img/svg/4-drawers-3-shelving-units.svg',
        'img/svg/4-drawers-3-shelving-units.svg',
        'img/svg/4-drawers-3-shelving-units.svg',
        'img/svg/4-drawers-3-shelving-units.svg',
      ]
    };
  },
  methods: {
    selectStep(index) {
      if (this.currentStep > index) {
        for (let i = index; i < this.currentStep; i++) {
          const keyToDelete = Object.keys(this.selectedObj)[i - 1];
          console.log(keyToDelete);
          delete this.selectedObj[keyToDelete];
          console.log(this.selectedObj)
        }
        this.currentStep = index;
      }
    },
  },
  components: {
    'custom-select': customSelect,
    'selected': selectedComponent,
    'constructor-step': step,
    'step-btn': stepBtn,
    'draggable': window['vuedraggable']
  },

  computed: {
  },
});

app.use(pinia);

if (document.querySelector("[data-constructor-type='wardrobe-inserts']")) {
  app.mount("[data-constructor-type='wardrobe-inserts']");
}
