<template>
    <article>
        <p>{{ joke }}</p>

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
export default {
    props: {
        id: Number,
        categories: Array,
        joke: String
    },
    data: () => {
        return {
            canAddNewFavoriteJoke: true,
            isFavoriteJoke: true
        };
    },
    methods: {
        /**
         * If a favorite changed, update the vue store.
         *
         * @param {object} joke
         */
        addFavoriteJoke() {
            // todo
        },
        /**
         * If a favorite changed, update the vue store.
         *
         * @param {object} joke
         */
        removeFavoriteJoke() {
            // todo
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
