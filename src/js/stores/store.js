
const { defineStore } = Pinia;

import { getAcfDataFromPage } from "../services";

export const useMainStore = defineStore('store', {
  state: () => ({
    framelessQuizAcfData: [],
    framedQuizAcfData: [],
  }),
  getters: {
    framelessQuizAcfDataSteps() {
      return this.framelessQuizAcfData.steps;
    },

    framedQuizAcfDataSteps() {
      return this.framedQuizAcfData.steps;
    }
  },
  actions: {
    async fetchFramelessQuizAcfData() {
      this.framelessQuizAcfData = await getAcfDataFromPage(162);
      console.log(this.framelessQuizAcfDataSteps);
    },

    async fetchFramedQuizAcfData() {
      this.framedQuizAcfData = await getAcfDataFromPage(173);
      console.log(this.framedQuizAcfDataSteps);

    }
  }
});
