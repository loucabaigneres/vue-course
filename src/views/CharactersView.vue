<script>
import CharacterCard from "@/components/CharacterCard.vue";
import CharacterForm from "@/components/CharacterForm.vue";
import { useCharacterStore } from "@/stores/personnage";

export default {
    name: "CharactersView",
    components: {
        CharacterCard,
        CharacterForm,
    },
    data() {
        return {
            // checker: false,
        };
    },
    setup() {
        const characterStore = useCharacterStore();
        return {
            characterStore,
        };
    },
    computed: {
        characters() {
            return this.characterStore.characters;
        },
    },
};
</script>

<template>
    <div class="characters">
        <h1>This is a character page</h1>

        <!-- <div class="checker">
            <input type="checkbox" v-model="checker" />
            <p v-if="checker">OUI</p>
        </div> -->

        <CharacterForm @addCharacter="addCharacter" />

        <div class="cards">
            <div v-for="character in characters" :key="character.pseudo">
                <CharacterCard :character="character" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.error {
    color: red;
}

.cards {
    margin: 50px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
