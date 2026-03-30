<script setup>
import TheHeader from "./components/TheHeader.vue";
import { useHashRoute } from "./composables/useHashRoute.js";
import Home from "./pages/Home.vue";
import Temperature from "./pages/Temperature.vue";
import Bits from "./pages/Bits.vue";
import Schedule from "./pages/Schedule.vue";

const routes = [
    { hash: '#home', component: Home},
    { hash: '#temperature', component: Temperature },
    { hash: '#bits', component: Bits },
    { hash: '#schedule', component: Schedule }
];

const { currentComponent, currentRoute, navigateTo } = useHashRoute(routes);
</script>

<template>
    <TheHeader :routes="routes" :current-route="currentRoute">Conversion App</TheHeader>
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
