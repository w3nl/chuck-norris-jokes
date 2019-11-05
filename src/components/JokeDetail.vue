<template>
    <article>
        <img v-if="icon_url" :src="icon_url" />
        <p v-html="value" />
        <a v-if="url" :href="url" target="_blank">{{ url }}</a>
        <div v-if="categories.length">
            Categories:
            <ul v-for="(category, index) in categories" :key="index">
                <li>{{ category }}</li>
            </ul>
        </div>

        <nav>
            <router-link :to="{ name: 'jokes-overview' }">
                <button>Terug</button>
            </router-link>
        </nav>
    </article>
</template>

<script>
export default {
    props: {
        id: String,
        categories: Array,
        created_at: String,
        updated_at: String,
        icon_url: String,
        value: String,
        url: String
    }
};
</script>

<style scoped>
nav {
    margin-top: 10px;
}
</style>
