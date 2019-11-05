<template>
    <main>
        <jokes-section v-if="jokes.length" :jokes="jokes">
            Jokes:
        </jokes-section>
    </main>
</template>

<script>
import { JokesService } from "@/services/jokes";
import JokesSection from "@/components/JokesSection";
import { mapGetters } from "vuex";

export default {
    components: {
        JokesSection
    },
    /**
     * Component is mounted, get the jokes.
     */
    mounted() {
        this.getJokes();
    },
    computed: {
        ...mapGetters({
            jokes: "jokes/jokes"
        })
    },
    methods: {
        /**
         * Get jokes with the text "dev".
         */
        getJokes() {
            JokesService.getJokes("dev");
        }
    }
};
</script>
