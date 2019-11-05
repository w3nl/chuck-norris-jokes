<template>
    <joke-detail v-bind="joke" />
</template>

<script>
import { JokesService } from "@/services/jokes";
import JokeDetail from "@/components/JokeDetail";
import { mapGetters } from "vuex";

export default {
    components: {
        JokeDetail
    },
    props: {
        jokeId: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters({
            getSingleJoke: "jokes/singleJoke"
        }),
        /**
         * Get the single joke from the vuex store.
         *
         * @return {object}
         */
        joke() {
            return this.getSingleJoke(this.jokeId);
        }
    },
    /**
     * Component is mounted, get the joke.
     */
    mounted() {
        this.getJoke();
    },
    methods: {
        /**
         * Get jokes by the id from the api.
         */
        getJoke() {
            JokesService.getJoke(this.jokeId);
        }
    }
};
</script>
