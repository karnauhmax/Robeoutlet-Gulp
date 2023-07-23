import startPart from "./parts/_start-part"
import selectPart from "./parts/_select-part";
import finalPart from "./parts/_final-part";


export default {
  components: {
    'StartPart': startPart,
    'SelectPart': selectPart,
    'FinalPart': finalPart,
  },
  template: `

  <div class="process__step grid" :class="{'process__step-start': type === 'start'}" data-show-selected="false">

  <StartPart
    v-if="type === 'start'" :img="img"  :checkboxes="checkboxes" :title="title" :notice="notice" :hanging-rail="hangingRail"
  />

  <SelectPart
    v-if="type === 'select'" :img="img" :title="title" :units="units" :checkboxes="checkboxes"
  />

  <FinalPart
    v-if="type === 'final'" :img="img"  :title="title" :notice="notice"
  />


  </div>

  `,
  props: {
    type: String,
    checkboxes: Array,
    img: String,
    resultImg: String,
    notice: String,
    title: String,
    label: Object,
    units: Array,
    hangingRail: Array
  },

  methods: {
    nextStep() {
      let selectedItem = {
        title: this.title,
        img: this.img,
        table: this.table,
        track: this.trackValue,
        doorType: this.doorType
      };


      let selectedKeys = {};

      Object.keys(selectedItem).forEach(key => {
        if (selectedItem.hasOwnProperty(key) && selectedItem[key]) {
          selectedKeys[key] = selectedItem[key];
        }
      });

      this.$root.selectedArr.push(selectedKeys);
      this.$root.currentStep++;

    },
    show() {
      console.log(this.resultImg);
    }
  },

  computed: {
  },

  mounted() {
  }

}
