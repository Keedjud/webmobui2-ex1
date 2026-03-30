<script setup>
 defineProps({
   label: {
     type: String,
   },
   type: {
     type: String,
     default: 'primary'
   }
 });
</script>

<template>
  <button :class="type">
    {{ label }}
  </button>
</template>

<style scoped>
  .primary {
    background-color: blue;
    color: white;
  }
  .secondary {
    background-color: gray;
    color: white;
  }
</style>