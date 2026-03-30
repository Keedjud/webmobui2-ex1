import { ref } from "vue";
import { watch } from "vue";

export function useJsonStorage(key, value) {
    const valRef = ref(value);

    watch(valRef, () => {
        const jsonVal = JSON.stringify(valRef.value);
        localStorage.setItem(key, jsonVal);
    });

    return {val: valRef};
}