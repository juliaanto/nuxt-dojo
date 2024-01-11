<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h1 class="text-h3 mt-5">{{ error.statusCode }}</h1>
          <p class="text-h4 mt-3">
            Oops!
          </p>
          <p class="mt-3">
            {{ error.message }}
          </p>
          <v-btn @click="handleClearError" color="teal-accent-4" class="mt-3" outlined>
            Go Home...
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
  defineProps(['error'])

  const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>