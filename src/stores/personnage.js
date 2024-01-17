import { defineStore } from "pinia";

export const useCharacterStore = defineStore("character", {
    state: () => ({
        characters: [
            {
                pseudo: "Grégory",
                age: 15,
            },
            {
                pseudo: "Nicolas",
                age: 23,
            },
            {
                pseudo: "Norman",
                age: 47,
            },
        ],
    }),
    actions: {
        addCharacter(character) {
            this.characters.push(character);
        },
    },
});
