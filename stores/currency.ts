import { defineStore } from "pinia";
import { currencies } from "../data/currencies.json";

export const useCurrencyStore = defineStore('currencyStore', {
  state: () => ({
    currentCurrency: currencies[0],
    ratio: 1,
  }),
  getters: {
    price: (state) => (productPrice: number) => {
      return state.currentCurrency.symbol + " " + Math.round(productPrice * state.ratio * 100) / 100
    }
  },
  actions: {
    setCurrency(currentCurency: { code: string; symbol: string; }) {
      this.currentCurrency = currentCurency;
      this.fetchRatio();
    },
    async fetchRatio() {
      const data = await $fetch(`/api/currency/${this.currentCurrency.code.toUpperCase()}`);
      this.ratio = data[this.currentCurrency.code.toUpperCase()].value;
    }
  }
})
