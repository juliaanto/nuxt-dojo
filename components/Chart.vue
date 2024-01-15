<template>
  <Doughnut :data="chartData" />
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Colors } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Colors)

export default {
  name: 'App',
  components: { Doughnut },
  props: {
    chartData: {
        type: Object,
        required: true
      },
  }
}
</script>