<script>
import { useCounterStore } from "../stores/counter";

export default {
    name: "CounterView",
    setup() {
        const counterStore = useCounterStore();

        return { counterStore };
    },
};
</script>

<template>
    <div>
        <p>J'ai cliqué {{ counterStore.count }} fois</p>
        <button @click="counterStore.increment">Clique</button>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #2c3e50;
    width: 20%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    color: white;
}

button {
    background-color: #42b983;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    color: white;
}

button:hover {
    background-color: #3da272;
}

button:active {
    background-color: #307b57;
}
</style>
