import selectedArr from "../components/selected/_selected";
import steps from "../components/quiz/frameless/_frameless-steps";
import CustomSelect from "../components/_custom-select";
import SelectedComponent from "../components/selected/_selected-component";
import Step from "../components/quiz/_step";
import StepBtn from "../components/_step-btn";
import PhotosTabs from "../components/_photos-tabs";
import { useMainStore } from "../stores/store";


const { createApp } = Vue;
const {createPinia, mapState, mapActions} = Pinia;


const pinia = createPinia();



const app = createApp({
  data() {
    return {
      stepBtns: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
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
      fetchFramelessQuizAcfData: 'fetchFramelessQuizAcfData'
    }),
  },

  components: {
    'custom-select': CustomSelect,
    'selected': SelectedComponent,
    'step': Step,
    'step-btn': StepBtn,
    'photos-tabs': PhotosTabs
  },

  computed: {
    ...mapState(useMainStore, ['framelessQuizAcfDataSteps', 'framelessQuizAcfData'])
  },

  mounted() {
    this.fetchFramelessQuizAcfData();
  }
});

app.use(pinia);

if (document.querySelector("[data-quiz-type='frameless-sliding-doors']")) {
  app.mount("[data-quiz-type='frameless-sliding-doors']");
}


