<template>
  <div>
    <v-select
      :items="['€ - EUR', '$ - USD', '£ - GBP', '¥ - JPY', '₽ - RUB', 'Fr - CHF']"
      model-value="€ - EUR"
      hide-details
      variant="plain"
      class="select"
      density="compact"
    ></v-select>
  </div>
</template>

<script setup>

</script>

<style scoped>
.select {
  min-width: 100px;
}
</style>