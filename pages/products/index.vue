<template>
  <v-row align="stretch">
    <v-col
      v-for="product in products" 
      :key="product.id"
      cols="3"
    >
      <ProductCard :product="product"/>
    </v-col>
  </v-row>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })

  const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>