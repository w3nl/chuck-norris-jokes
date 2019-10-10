<template>
    <article>
        <p v-html="joke" />

        <nav>
            <button v-if="canAddNewFavoriteJoke" @click="addFavoriteJoke">
                ❤️
            </button>
            <button v-if="isFavoriteJoke" @click="removeFavoriteJoke">
                💔
            </button>
        </nav>
    </article>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    props: {
        id: Number,
        categories: Array,
        joke: String
    },
    computed: {
        ...mapGetters({
            canAddNewFavorite: "jokes/canAddNewFavorite",
            isFavorite: "jokes/isFavorite"
        }),
        /**
         * Check if this is a favorite joke.
         *
         * @return {boolean}
         */
        isFavoriteJoke() {
            return this.isFavorite(this.id);
        },
        /**
         * CHeck if you can add a new joke.
         *
         * @return {boolean}
         */
        canAddNewFavoriteJoke() {
            return this.canAddNewFavorite && !this.isFavoriteJoke;
        }
    },
    methods: {
        ...mapActions({
            addFavorite: "jokes/addFavorite",
            removeFavorite: "jokes/removeFavorite"
        }),
        /**
         * If a favorite changed, update the vue store.
         *
         * @param {object} joke
         */
        addFavoriteJoke() {
            this.addFavorite({
                id: this.id,
                joke: this.joke,
                categories: this.categories
            });
        },
        /**
         * If a favorite changed, update the vue store.
         *
         * @param {object} joke
         */
        removeFavoriteJoke() {
            this.removeFavorite({
                id: this.id,
                text: this.joke
            });
        }
    }
};
</script>

<style scoped>
article {
    display: flex;
    background-color: #ccc;
    margin: 0.5em;
}

p {
    display: flex;
    flex: auto;
    padding-left: 0.5em;
    padding-right: 0.5em;
}
</style>
