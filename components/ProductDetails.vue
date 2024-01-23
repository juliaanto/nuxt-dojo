<template>
  <div>
    <v-card>
      <v-row>
        <v-col cols="6">
          <div class="pa-7">
            <v-img
            :width="400"
            max-width="400"
            cover
            :src="product.image"
            class="mx-auto my-7"
          ></v-img>
          </div>
        </v-col>

        <v-col cols="6">
          <div class="pa-7">
            <v-card-title class="text-h5 my-7 pa-0">{{ product.title }}</v-card-title>
            <v-card-text class="text-h6 my-7 pa-0">Price - {{ currencyStore.price(product.price) }}</v-card-text>
            <v-card-subtitle class="text-subtitle-1 my-2 pa-0">Product description:</v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text class="px-0">{{ product.description }}</v-card-text>
            <v-btn
              color="teal-accent-4"
              prepend-icon="mdi-cart-plus"
            >
              Add to cart
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product']);
  const currencyStore = useCurrencyStore();
</script>

<style scoped>

</style>