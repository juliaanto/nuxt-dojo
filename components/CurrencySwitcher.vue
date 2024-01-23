<template>
  <div>
    <v-select
      :items=currencyList
      :model-value=currencyStore.currentCurrency.code
      hide-details
      variant="plain"
      class="select"
      density="compact"
      @update:model-value="handleUpdate"
    ></v-select>
  </div>
</template>

<script setup>
  import { currencies } from "../data/currencies.json";
  const currencyStore = useCurrencyStore();

  const getCurrencyList = () => {
    const currencyList = [];

    currencies.forEach((currency) => {
      currencyList.push({
        title: currency.symbol + " - " + currency.code.toUpperCase(),
        value: currency.code
      })
    })

    return currencyList;
  }
  const currencyList = getCurrencyList();

  const handleUpdate = (value) => {
    const currentCurrency = currencies.find((currency) => currency.code === value);
    currencyStore.setCurrency(currentCurrency);
  }
</script>

<style scoped>
.select {
  min-width: 100px;
}
</style>