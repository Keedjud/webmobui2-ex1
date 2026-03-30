<script setup>
import { defineModel, ref } from "vue";
import BaseInputNumber from "../components/BaseInputNumber.vue";

const dataSi = ref(0); // En bits (unité de base)

const dataBits = defineModel("bits", {
    get: () => parseFloat(dataSi.value.toFixed(2)),
    set: (value) => (dataSi.value = Number(value)),
});

const dataBytes = defineModel("bytes", {
    get: () => parseFloat((dataSi.value / 8).toFixed(2)),
    set: (value) => (dataSi.value = Number(value * 8)),
});

const dataKilobytes = defineModel("kilobytes", {
    get: () => parseFloat((dataSi.value / 8 / 1024).toFixed(2)),
    set: (value) => (dataSi.value = Number(value * 1024 * 8)),
});

const dataMegabytes = defineModel("megabytes", {
    get: () => parseFloat((dataSi.value / 8 / 1024 / 1024).toFixed(2)),
    set: (value) => (dataSi.value = Number(value * 1024 * 1024 * 8)),
});

const dataGigabytes = defineModel("gigabytes", {
    get: () => parseFloat((dataSi.value / 8 / 1024 / 1024 / 1024).toFixed(2)),
    set: (value) => (dataSi.value = Number(value * 1024 * 1024 * 1024 * 8)),
});
</script>

<template>
    <h2>Data Converter (Bytes/Bits)</h2>
    <section>
        <BaseInputNumber label="Data in Bits" v-model="dataBits" />
        <BaseInputNumber label="Data in Bytes" v-model="dataBytes" />
        <BaseInputNumber label="Data in Kilobytes (KB)" v-model="dataKilobytes" />
        <BaseInputNumber label="Data in Megabytes (MB)" v-model="dataMegabytes" />
        <BaseInputNumber label="Data in Gigabytes (GB)" v-model="dataGigabytes" />
    </section>
</template>

<style scoped>
section {
    display: grid;
    margin: 2rem;
    gap: 1rem;
}
</style>
