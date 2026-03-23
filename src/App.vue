<script setup>
import { computed, ref } from "vue";
import TheHeader from "./components/TheHeader.vue";
import BaseInputNumber from "./components/BaseInputNumber.vue";
import { useHashRoute } from "./composable/useHashRoute.js";
import Home from "./pages/PageHome.vue";
import Temperature from "./pages/PageTemperature.vue";

const routes = {
    'home': Home,
    'temperature': Temperature
};

const { currentPage } = useHashRoute(routes);
const temperatureSi = ref(0); //En Kelvin

const tempKelvin = defineModel("kelvin", {
    get: () => parseFloat(temperatureSi.value.toFixed(2)),
    set: (value) => temperatureSi.value = Number(value),
});

const tempCelsius = defineModel("celsius", {
    get: () => parseFloat((temperatureSi.value - 273.15).toFixed(2)),
    set: (value) => temperatureSi.value = Number(value + 273.15),
});

const tempFahrenheit = defineModel("fahrenheit", {
    get: () => parseFloat((((temperatureSi.value - 273.15) * 9) / 5 + 32).toFixed(2)),
    set: (value) => temperatureSi.value = Number(((value - 32) * 5) / 9 + 273.15),
});
</script>

<template>
    <TheHeader />
    <main>
      <Home v-if="currentPage === 'home'"/>
      <Temperature v-if="currentPage === 'temperature'" />
    </main>
    <section>
        <BaseInputNumber label="Temperature in Kelvin" v-model="tempKelvin" />
        <BaseInputNumber label="Temperature in Celsius" v-model="tempCelsius" />
        <BaseInputNumber label="Temperature in Fahrenheit" v-model="tempFahrenheit" />
    </section>
</template>

<style>
  section {
    display: grid;
    margin: 2rem;
    gap: 1rem;
  }
</style>
