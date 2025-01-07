<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useData } from "~/composables/useData";

interface Championship {
  _id?: number;
  name?: string;
  year?: number;
}

const { getChampionships } = useData();
// Define un ref para almacenar los datos
// const championships = ref<Championship[] | null>(null);
const championships = ref<any>(null);

// Llama a la función dentro de onMounted y asigna el resultado
onMounted(async () => {
  console.log("hola");
  const { data } = await (getChampionships() || []);
  championships.value = data;
  console.log(
    "🚀 ~ file: index.vue:20 ~ onMounted ~ championships.value :",
    championships.value
  );
});
</script>

<template>
  <div>
    <h1>Gabi Alvarez</h1>
    <pre>{{ championships }}</pre>
  </div>
</template>
