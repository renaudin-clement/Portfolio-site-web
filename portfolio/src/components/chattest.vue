<script setup>
import { ref, onMounted } from "vue";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

// Enregistrer les composants Chart.js
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const canvas = ref(null);

onMounted(() => {
  new Chart(canvas.value, {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
          label: "Valeurs",
          data: [12, 19, 3, 5],
          backgroundColor: "rgba(75, 192, 192, 0.5)"
        }
      ]
    }
  });
});
</script>

<template>
  <div style="max-width:600px;">
    <canvas ref="canvas"></canvas>
  </div>
</template>
