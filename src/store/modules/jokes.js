const state = {
    jokes: []
};

const getters = {
    jokes: state => state.jokes,
    singleJoke: state => id => state.jokes.find(joke => joke.id == id)
};

const actions = {
    setJokes: ({ commit }, jokes) => commit("setJokes", jokes),
    addJoke: ({ state, commit }, joke) => {
        const jokeFound = state.jokes.find(
            originalJoke => originalJoke.id == joke.id
        );

        if (!jokeFound) {
            commit("addJoke", joke);
        }
    }
};

const mutations = {
    setJokes: (state, jokes) => (state.jokes = jokes),
    addJoke: (state, joke) => state.jokes.push(joke)
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
