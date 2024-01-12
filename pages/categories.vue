<template>
  <div>
    <h2 class="text-h2">Categories</h2>
    <p class="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, facere sunt. Perspiciatis sapiente ipsum, quod accusamus illo distinctio animi commodi.</p>
    <p class="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, facere sunt. Perspiciatis sapiente ipsum, quod accusamus illo distinctio animi commodi.</p>
    <p>The USD to EUR exchange rate as of {{ date }} is {{ value }}.</p>
  </div>
</template>

<script setup>
  const date = '2024-01-11';
  const { data } = await useFetch(`/api/currency/${date}`);

  const value = data.value.EUR.value;

</script>

<style scoped></style>