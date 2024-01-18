<template>
  <div>
    <v-app-bar>
      <v-container>
        <v-row justify="space-between" align="center">
          <v-col>
            <v-btn exact to="/" variant="text" class="font-weight-bold text-teal-accent-4">Nuxt Dojo</v-btn>
          </v-col>
          <v-col>
            <v-list class="d-flex justify-end" color="#12b488">
              <v-list-item link exact title="Home" to="/"></v-list-item>
              <v-list-item link exact title="Categories" to="/categories"></v-list-item>
            </v-list>
          </v-col>
          <v-col class="flex-grow-0">
            <CurrencySwitcher />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>