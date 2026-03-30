<script setup>
  import { ref } from 'vue';
  import BaseButton from './BaseButton.vue';
  import { useJsonStorage } from '../composables/useJsonStorage';

  const props = defineProps({
    routes: {
      type: Array,
      default: () => []
    },
    currentRoute: {
      type: Object,
      default: () => ({})
    }
  });

  const { val : label } = useJsonStorage('theme', 'dark');
  const { val : fontsize } = useJsonStorage('fontsize', '1rem');

  function toggleTheme() {
    label.value = label.value === 'dark' ? 'light' : 'dark';
  }

  function getRouteName(hash) {
    return hash.replace('#', '').charAt(0).toUpperCase() + hash.replace('#', '').slice(1);
  }
</script>

<template>
  <header>
    <h1><slot></slot></h1>
    <BaseButton @click="toggleTheme" :label="label" type="primary"/>
    <nav>
      <a 
        v-for="route in routes" 
        :key="route.hash" 
        :href="route.hash"
        :class="{ active: currentRoute.hash === route.hash }"
      >
        {{ getRouteName(route.hash) }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
  h1 {
    color: var(--text-h);
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: var(--bg);
    border-bottom: 1px solid var(--border);
    gap: 1rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  nav a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: var(--text);
    border-radius: 6px;
    transition: all 0.2s ease;
    font-size: 0.95rem;
  }

  nav a:hover {
    background-color: var(--accent-bg);
    color: var(--accent);
  }

  nav a:active {
    transform: scale(0.95);
  }

  nav a.active {
    background-color: var(--accent);
    color: white;
    font-weight: 500;
  }

  nav a.active:hover {
    background-color: var(--accent);
    color: white;
  }
</style>
