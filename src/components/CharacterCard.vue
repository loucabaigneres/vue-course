<script>
export default {
    name: "CharacterCard",
    props: ["character"],
};
</script>

<template>
    <div>
        <h2>{{ character.pseudo }}</h2>
        <p>Âge : {{ character.age }}</p>
        <p v-if="character.age > 18 && character.age < 40">
            La personne est majeure
        </p>
        <p v-else-if="character.age > 40">La personne est vieille</p>
        <p v-else>La personne est mineure</p>
    </div>
</template>

<style scoped>
div {
    width: 200px;
    margin: 0 auto;
    height: 200px;
    background-color: #42b963;
    border-radius: 8px;
    padding: 10px;
}
</style>
