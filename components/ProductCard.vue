<template>
  <v-card class="pt-2">
    <v-img
      alt="Product thumb"
      class="thumb"
      :src="product.image"
      height="200px"
    ></v-img>
    <v-card-title v-text="product.title" class="text-h6"></v-card-title>
    
    <v-card-actions>
      <v-btn 
        :to="`/products/${product.id}`"
        color="teal-accent-4"
        block
        variant="flat"
      >
        View Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>