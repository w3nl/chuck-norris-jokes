<template>
    <section>
        <h2><slot>Jokes:</slot></h2>

        <single-joke
            v-for="(joke, index) in jokes"
            :key="index"
            v-bind="joke"
        />
    </section>
</template>

<script>
import SingleJoke from "./SingleJoke";

export default {
    components: {
        SingleJoke
    },
    props: {
        jokes: Array
    }
};
</script>
