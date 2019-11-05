<template>
    <div id="app">
        <header>
            <router-link :to="{ name: 'jokes-overview' }">
                <h1>Chuck Norris Jokes</h1>
            </router-link>
        </header>

        <router-view />
    </div>
</template>
