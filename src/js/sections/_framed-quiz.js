import selectedArr from "../components/selected/_selected";
import steps from "../components/quiz/framed/_framed-steps";
import customSelect from "../components/_custom-select";
import selectedComponent from "../components/selected/_selected-component";
import step from "../components/quiz/_step";
import stepBtn from "../components/_step-btn";
import { useMainStore } from "../stores/store";

const { createApp } = Vue;
const {createPinia, mapState, mapActions} = Pinia;

const pinia = createPinia();




const app = createApp({
  data() {
    return {
      stepBtns: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
      currentStep: 1,
      steps,
      selectedArr,
      imgPath: "img/content/",
    };
  },
  methods: {
    selectStep(index) {
      if (this.currentStep > index) {
        this.selectedArr.splice(index - 1);
        for (let i = index; i < this.currentStep; i++) {
          this.selectedArr.splice(i - 1);
        }
        this.currentStep = index;
      }
    },

    ...mapActions(useMainStore, {
      fetchFramedQuizAcfData: 'fetchFramedQuizAcfData'
    }),

  },
  components: {
    'custom-select': customSelect,
    'selected': selectedComponent,
    'step': step,
    'step-btn': stepBtn,
  },

  computed: {
    ...mapState(useMainStore, ['framedQuizAcfData', 'framedQuizAcfDataSteps'])
  },

  mounted() {
    this.fetchFramedQuizAcfData();
  }
});

app.use(pinia);


if (document.querySelector("[data-quiz-type='framed-sliding-doors']")) {
  app.mount("[data-quiz-type='framed-sliding-doors']");
}
