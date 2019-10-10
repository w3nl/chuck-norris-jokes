<template>
    <main>
        <header>
            <h1>Chuck Norris Jokes</h1>

            <nav>
                <button @click="get10RandomJokes">Get 10 random jokes</button>
                <button v-if="canAddNewFavoriteJoke" @click="getRandomFavorite">
                    Get another random favorite joke
                    <span v-if="timerIsOn">⏳</span>
                </button>
            </nav>
        </header>

        <jokes-section v-if="favoriteJokes.length" :jokes="favoriteJokes">
            ❤️ Favorite jokes:
        </jokes-section>
        <jokes-section v-if="jokes.length" :jokes="jokes">
            🔀 New jokes:
        </jokes-section>
    </main>
</template>

<script>
import { JokesService } from "@/services/jokes";
import JokesSection from "./JokesSection";
import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        JokesSection
    },
    /**
     * Component is mounted, get the jokes.
     */
    mounted() {
        this.resetTimer();
        this.get10RandomJokes();
    },
    computed: {
        ...mapGetters({
            jokes: "jokes/jokes",
            favoriteJokes: "jokes/favoriteJokes",
            canAddNewFavoriteJoke: "jokes/canAddNewFavorite",
            timerIsOn: "jokes/timerIsOn"
        })
    },
    methods: {
        ...mapActions({
            resetTimer: "jokes/resetTimer"
        }),
        /**
         * Get 10 random jokes.
         */
        get10RandomJokes() {
            JokesService.getJokes(10);
        },
        /**
         * Get a random favorite joke.
         */
        getRandomFavorite() {
            JokesService.getRandomFavoriteJoke();
        }
    }
};
</script>
