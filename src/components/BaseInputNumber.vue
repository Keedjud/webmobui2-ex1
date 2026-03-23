<script setup>
  const model = defineModel();

  defineProps({
    label: String,
  });
</script>

<template>
  <label>{{ label }}</label>
  <input type="number" v-model="model">
</template>

<style scoped>
  input, label {
    font-size: 1.5rem;
    text-align: start;
  }

  input {
    height: 2rem;
    width: 100%;
    max-width: 18rem;
  }
</style>