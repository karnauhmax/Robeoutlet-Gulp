import selected from "../../selected/_selected";

export default {
  data() {
    return {
      selected
    }
  },
  template: `
  <div tabindex="0" class="process__item grid" @click="nextStep" @keyup.enter="nextStep">
         <div class="process__img ibg">
          <img loading="lazy" :src="img?.url" :width="img?.width" height="img?.height" alt="Framed Silver Doorss">
        </div>
        <p class="process__name uppercase-bold">
          {{title}}
        </p>
      </div>
  `,
  props: {
    title: String,
    img: Object,
    table: [Array, String],
    trackValue: String,
    doorType: String
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

      console.log(this.$root.selectedArr);



      this.$root.currentStep++;


    }
  }
};
