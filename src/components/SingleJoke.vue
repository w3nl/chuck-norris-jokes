<template>
    <article>
        <router-link :to="{ name: 'joke-detail', params: { jokeId: id } }">
            <p v-html="value" />
        </router-link>
    </article>
</template>

<script>
export default {
    props: {
        id: String,
        categories: Array,
        value: String
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
