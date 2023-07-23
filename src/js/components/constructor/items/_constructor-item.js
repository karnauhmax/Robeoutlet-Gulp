import customRadio from "../../_radio"
import counter from "../../_counter"
import CustomCheckbox from "../../_checkbox"

export default {
  data() {
    const { title, table, id, img, resultImg } = this;
    return {
      selectedValue: {
        title,
        itemTable: table,
        id,
        img,
        resultImg,
        items: [],
      },
      isChecked: [],
    };
  },

  components: {
    'Radio': customRadio,
    'Counter': counter,
    'CustomCheckbox': CustomCheckbox
  },
  template: `
  <div class="process__item">
    <div class="process__item-name text-500">{{ title }}</div>
    <img loading="lazy" :src="img" class="process__item-img" alt="Constructor Unit" />
    <div class="process__item-inputs grid">
      <template v-for="(checkbox, index) in checkboxes" :key="index">

        <CustomCheckbox
          :name="title"
          :value="checkbox.value"
          :showUnits="false"
          :label="checkbox.value"
          v-model:checked="isChecked[index].checked"
        />


        <Counter
          v-if="counters[index]"
          @value-change="counterChange($event, index)"
          :class="{disabled: !isChecked[index].checked}"
        />
      </template>
    </div>
  </div>

  `,
  props: {
    img: String,
    resultImg: String,
    title: String,
    checkboxes: Array,
    counters: Array,
    table: Array,
    id: Number,
  },

  methods: {
    counterChange(counterValue, index) {

      const checkboxValue = this.checkboxes[index].value;
      const isChecked = this.isChecked[index];
      if (isChecked && counterValue >= 1) {
        const existingItem = this.selectedValue.items.find(item => item.width === checkboxValue);
        if (existingItem) {
          existingItem.quantity = counterValue;
        } else {
          const item = { width: checkboxValue, quantity: counterValue };
          this.selectedValue.items.push(item);
        }
      } else {
        this.selectedValue.items.splice(index);
      }

      console.log(this.selectedValue.items);
    }

  },

  computed: {
    checkboxStates() {
      return this.checkboxes.map((checkbox) => {
        return {
          value: checkbox.value,
          checked: false
        }
      });
    }
  },

  created() {
    this.isChecked = this.checkboxStates;
  },

  watch: {
    selectedValue: {
      handler(newVal, oldVal) {
          this.$emit('selected-value-changed', newVal);
      },
      deep: true
    },

    isChecked: {
      handler(checkboxes) {

        checkboxes.forEach((checkbox) => {
          if (!checkbox.checked) {
            const itemToDelete = this.selectedValue.items.find(item => item && item.width === checkbox.value);

            if (itemToDelete) {
              this.selectedValue.items.splice(this.selectedValue.items.indexOf(itemToDelete), 1)
            }
          }
        });

      },
      deep: true
    }
  }

}

