<template>
  <v-app>
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
        </v-row>
      </v-container>
    </v-app-bar>

    <div>
      <v-container class="custom-container">
        <slot />
      </v-container>
    </div>

    <v-footer>
      <v-container>
        <v-list class="d-flex" color="#12b488">
          <v-list-item link exact title="Home" to="/"></v-list-item>
          <v-list-item link exact title="Categories" to="/categories"></v-list-item>
        </v-list>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style scoped>
  .custom-container {
    margin-top: 100px;
  }
</style>