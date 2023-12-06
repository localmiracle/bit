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
    <chart :data="chartData" />
  </div>
</template>

<script>
import { Chart } from 'vue-chartjs';

export default {
  components: {
    Chart,
  },
  data() {
    return {
      selectedPeriod: 'day',
      chartData: {},
    };
  },
  methods: {
    fetchData() {
      // Ваша логика запроса данных из базы данных

      // Пример: Мы предполагаем, что fetchData возвращает объект данных или undefined
      const fetchedData = this.fetchDataFromDatabase();

      // Проверка наличия данных перед использованием map
      if (fetchedData && Array.isArray(fetchedData)) {
        // Здесь вы можете обработать и сохранить данные для графика
        this.chartData = fetchedData.map(item => ({
          // Ваш код форматирования данных
        }));
      } else {
        // Если данные отсутствуют или имеют неправильный формат, вы можете обработать ситуацию
        console.error('Данные для графика не были получены или имеют неправильный формат.');
      }
    },
    fetchDataFromDatabase() {
      // Ваша реальная логика для запроса данных из базы данных
      // Верните массив данных, если они доступны
    },
  },
};
</script>
<!-- pages/index.vue -->
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
    <!-- Используйте ваш компонент Chart.vue -->
    <Chart />
  </div>
</template>

<script>
// Import Chart.vue
import Chart from '~/components/Chart.vue';

export default {
  components: {
    Chart,
  },
  data() {
    return {
      selectedPeriod: 'day',
    };
  },
  methods: {
    fetchData() {
      // Реализуйте логику для запроса данных из вашей базы данных
      // и передачи данных в компонент Chart.vue
      // Пример:
      this.$refs.chart.fetchData();
    },
  },
};
</script>
