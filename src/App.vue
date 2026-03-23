<script setup>
import TheHeader from "./components/TheHeader.vue";
import { useHashRoute } from "./composable/useHashRoute.js";
import Home from "./pages/PageHome.vue";
import Temperature from "./pages/PageTemperature.vue";

const routes = {
    home: Home,
    temperature: Temperature,
};

const { currentPage } = useHashRoute(routes);
</script>

<template>
    <TheHeader />
    <main>
        <Home v-if="currentPage === 'home'" />
        <Temperature v-if="currentPage === 'temperature'" />
    </main>
</template>

<style>
* {
    padding: 0;
    margin: 0;
}
main {
    padding: 1em;
}
</style>
