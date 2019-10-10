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
            Favorite jokes:
        </jokes-section>
        <jokes-section v-if="jokes.length" :jokes="jokes">
            New jokes:
        </jokes-section>
    </main>
</template>

<script>
import JokesSection from "./JokesSection";
import { JokesService } from "@/services/jokes";

export default {
    components: {
        JokesSection
    },
    data: () => {
        return {
            timerIsOn: false,
            canAddNewFavoriteJoke: true,
            favoriteJokes: [],
            jokes: []
        };
    },
    /**
     * Component is mounted, get the jokes.
     */
    mounted() {
        this.get10RandomJokes();
    },
    methods: {
        /**
         * Get 10 random jokes.
         */
        get10RandomJokes() {
            JokesService.getJokes(10).then(newJokes => (this.jokes = newJokes));
        },
        /**
         * Get a random favorite joke.
         */
        getRandomFavorite() {
            this.favoriteJokes = [
                {
                    id: 1,
                    joke: "example",
                    categories: []
                }
            ];
        }
    }
};
</script>
