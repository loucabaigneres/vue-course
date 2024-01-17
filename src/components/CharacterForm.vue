<script>
import CharacterCard from "@/components/CharacterCard.vue";
import { useCharacterStore } from "@/stores/personnage";
export default {
    name: "CharacterForm",
    components: {
        CharacterCard,
    },
    data() {
        return {
            formCharacter: {
                pseudo: "",
                age: 0,
            },
        };
    },
    setup() {
        const characterStore = useCharacterStore();
        return {
            characterStore,
        };
    },
    methods: {
        addCharacter() {
            this.characterStore.addCharacter(this.formCharacter);
            this.formCharacter = {
                pseudo: "",
                age: 0,
            };
        },
    },
};
</script>

<template>
    <h2>Preview:</h2>
    <CharacterCard :character="formCharacter" />
    <form @submit.prevent="addCharacter()">
        <input
            type="text"
            placeholder="Pseudo"
            v-model="formCharacter.pseudo"
        />
        <input type="number" placeholder="Age" v-model="formCharacter.age" />
        <p class="error" v-if="formCharacter.pseudo.length < 3">
            Le pseudo doit faire au moins 3 caractères
        </p>
        <button type="submit">Ajouter</button>
    </form>
</template>

<style scoped>
form {
    background-color: #42b963;
    width: 50vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
}

input {
    padding: 10px;
    border-radius: 10px;
    border: none;
}

button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: 2c3e50;
    color: white;
    cursor: pointer;
}
</style>
