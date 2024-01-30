<template>
  <v-row align="stretch">
    <v-col
      v-for="product in products" 
      :key="product.id"
      cols="3"
      data-test="product-list"
    >
      <ProductCard :product="product"/>
    </v-col>
  </v-row>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })

  const products = await $fetch('https://fakestoreapi.com/products');

  useHead({
    title: 'Nuxt Dojo | Merch'
  })
</script>

<style scoped>

</style>