import DefaultItem from "./items/_default-item";
import PreviewItem from './items/_preview-item';
import FinalItem from "./items/_final-item";
import Selected from "../selected/_selected-component";
import { useMainStore } from "../../stores/store";

const {mapState, mapActions, mapGetters} = Pinia;

export default {
  components: {
    'DefaultItem': DefaultItem,
    'PreviewItem': PreviewItem,
    'FinalItem': FinalItem,
    'Selected': Selected
  },
  template: `
  <div class="process__step grid process__step-start" :data-show-selected=showSelected :data-step-final="itemsType === 'final' ? 'true' : null">
    <p class="uppercase-bold section-title process__step-title">
      Step {{index + 1}}. {{title}}
    </p>

      <div v-if="isNotFinal(itemsType)" class="process__items grid" :data-items-type=itemsType>

      <template v-if="itemsType === 'preview'">
        <PreviewItem
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        :title="item.title"
        :table="item.pricing"
        :color="item.preview_color"
        :index="index"
        />
      </template>

      <template v-if="itemsType === 'default'">
        <DefaultItem
          v-for="(item, itemIndex) in items"
          :key="itemIndex"
          :title="item.title"
          :table="item.pricing"
          :trackValue="item.track_value"
          :img="item.image"
          :doorType="item.doorType"
        />
      </template>

      </div>

      <Selected
        v-if="showSelected" :selectedArr="selected"
       />

      <FinalItem
        v-if="itemsType === 'final'"
      />

    </div>
  `,


  props: {
    showSelected: Boolean,
    itemsType: String,
    index: Number,
    items: [Array, Boolean],
    title: String,
    selected: Array,
    imgPath: String
  },


  methods: {
    isNotFinal(type) {
      return type !== "final";
    },


  },
}
