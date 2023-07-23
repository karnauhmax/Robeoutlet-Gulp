export default {
  template: `
          <div class="process__selected-item grid">
            <div v-if="img" class="process__selected-img ibg">
             <img loading="lazy" :src="img.url" width="img.width" height="img.height" alt="img.alt">
            </div>
            <div class="process__selected-color" v-else :style="{'background-color': color}"></div>
            <p class="process__selected-name">
             {{title}}
            </p>
        </div>
  `,
  props: {
    img: Object,
    title: String,
    color: String,
  }
}
