import { ref } from "vue";

export function useHashRoute(routes) {
    const currentPage = ref('temperature');

    return { currentPage };
}