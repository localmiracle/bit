<template>
    <div>
      <select v-model="selectedPeriod" @change="fetchData">
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
        <option value="custom">Custom</option>
      </select>
      <div v-if="selectedPeriod === 'custom'">
        <!-- Реализация выбора пользовательского периода -->
      </div>
      <div v-if="chartData && chartData.datasets">
        <!-- Передаем данные напрямую в компонент Chart -->
        <Chart :chart-data="chartData" :options="chartOptions" />
      </div>
    </div>
  </template>
  
  <script>
  import Chart from "@/components/Chart.vue";
  
  export default {
    components: {
      Chart,
    },
    data() {
      return {
        selectedPeriod: "day",
        chartData: {
          labels: ["Label 1", "Label 2", "Label 3"],
          datasets: [
            {
              label: "Dataset 1",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              data: [65, 59, 80],
            },
          ],
        },
        chartOptions: {
          // Дополнительные опции графика (по желанию)
        },
      };
    },
    methods: {
      fetchData() {
        // Реализуйте логику для запроса данных из вашей базы данных
      },
    },
  };
  </script>
  