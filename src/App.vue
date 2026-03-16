<script setup>
import { ref } from 'vue';
import TheHeader from './components/TheHeader.vue';

  const temperature = ref(0);
</script>

<template>
  <TheHeader />
  <p>Temperature: {{ temperature }}K</p>
</template>
