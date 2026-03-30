import { ref } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(false);
  const loading = ref(true);

  fetch(url).then(async (resp) => {
    data.value = await resp.json();
    loading.value = false;
  })


  return {data, error, loading};
}