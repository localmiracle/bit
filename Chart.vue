<!-- components/Chart.vue -->
<template>
    <div>
      <!-- Ваш график здесь -->
      <chart :data="chartData" />
    </div>
  </template>
  
  <script>
  import { Chart } from 'vue-chartjs';
  
  export default {
    components: {
      Chart,
    },
    props: {
      // Можете добавить необходимые props, если это необходимо
    },
    data() {
      return {
        chartData: {},
      };
    },
    methods: {
      fetchData() {
        // Здесь вы должны реализовать логику для запроса данных из вашей базы данных
        // и обновления chartData
        // Пример (замените на свою логику):
        this.chartData = {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [10, 20, 30],
            },
          ],
        };
      },
    },
    // Жизненный цикл компонента
    mounted() {
      // Вы можете вызвать fetchData при монтировании компонента, чтобы загрузить данные
      this.fetchData();
    },
  };
  </script>
<!-- components/Chart.vue -->
<template>
    <div>
      <!-- Ваш график здесь -->
      <chart v-if="chartData" :data="chartData" />
    </div>
  </template>
  
  <script>
  import { Chart } from 'vue-chartjs';
  
  export default {
    components: {
      Chart,
    },
    props: {
      reactiveProp: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        chartData: null,
      };
    },
    methods: {
      fetchData() {
        // Здесь вы должны реализовать логику для запроса данных из вашей базы данных
        // и обновления chartData
        // Пример (замените на свою логику):
        this.chartData = {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [10, 20, 30],
            },
          ],
        };
      },
    },
    // Жизненный цикл компонента
    mounted() {
      // Вы можете вызвать fetchData при монтировании компонента, чтобы загрузить данные
      this.fetchData();
    },
  };
  </script>
    