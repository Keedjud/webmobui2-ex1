<script setup>
  import { ref } from 'vue';
  import BaseButton from './BaseButton.vue';
  import { useJsonStorage } from '../composables/useJsonStorage';

  const { val : label } = useJsonStorage('theme', 'dark');
  const { val : fontsize } = useJsonStorage('fontsize', '1rem');

  function toggleTheme() {
    label.value = label.value === 'dark' ? 'light' : 'dark';
  }
</script>

<template>
  <header>
    <h1><slot></slot></h1>
    <BaseButton @click="toggleTheme" :label="label" type="primary"/>
    <nav>
      <a href="#home">Home</a>
      <a href="#temperature">Temperature</a>
    </nav>
  </header>
</template>

<style scoped>
  h1 {
    color: white;
    margin: 0;
    padding: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-primary);
  }
</style>
