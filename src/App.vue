<script setup>
import TheHeader from "./components/TheHeader.vue";
import { useHashRoute } from "./composables/useHashRoute.js";
import Home from "./pages/Home.vue";
import Temperature from "./pages/Temperature.vue";

const routes = [
    {
        hash: '#home',
        component: Home
    },
    {
        hash: '#temperature',
        component: Temperature
    }
];

const { currentComponent, currentRoute, navigateTo } = useHashRoute(routes);
</script>

<template>
    <TheHeader>Conversion App</TheHeader>
    <main>
        <component :is="currentComponent" />
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
