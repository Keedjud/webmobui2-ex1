<script setup>
import { computed } from 'vue';
import { useFetch } from '../composables/useFetch';

  const {data: schedule, error, loading} = useFetch('https://chabloz.eu/files/horaires/all');

  const filter = defineModel();

  const schedulFiltered = computed(() => {
    return schedule.value.filter((c) => c.label.search(filter.value) != -1);
  })

  const scheduleSorted = computed(() => {
    if (!schedulFiltered.value) return [];
    const sorted = schedulFiltered.value.toSorted((c1, c2) => {
      return c1.start.localeCompare(c2.start);
    })
    return sorted;
  })
</script>

<template>
  <div>
    <h2>Horaires</h2>
    <div v-if="loading">
      Chargement en cours
    </div>
    <div v-if="schedule">
      <input v-model="filter" type="text">
      {{  filter  }}
      <div v-for="cours in scheduleSorted">
        {{  cours.label }}
        {{  cours.start }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>