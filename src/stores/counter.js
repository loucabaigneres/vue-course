// Méthode 1
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
    const count = ref(0);
    const increment = () => {
        count.value++;
    };

    return { count, increment };
});

// Méthode 2
import { defineStore } from "pinia";

export const useCompteurStore = defineStore("compteur", {
    data() {
        return {
            compteur: 0,
        };
    },
    methods: {
        incrementer() {
            compteur.value++;
        },
    },
    return: {
        compteur,
        incrementer,
    },
});