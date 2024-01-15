<template>
  <div>
    <h2 class="text-h2">Categories</h2>
    <div class="chart-wrapper">
      <Chart :chartData="chartData" />
    </div>
  </div>
</template>

<script setup>
  const { data: categories } = await useFetch('https://fakestoreapi.com/products/categories')

  const categoriesData = [];

  for (const category of categories.value) {
    const { data: products } = await useFetch('https://fakestoreapi.com/products/category/' + category)
    categoriesData.push(products.value.length);
  }

  const chartData = {
    labels: categories.value,
    datasets: [
      {
        data: categoriesData
      }
    ]
  }
  
</script>

<style scoped>
.chart-wrapper {
  max-height: 400px;
}
</style>