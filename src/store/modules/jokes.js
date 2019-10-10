const state = {
    jokes: [],
    favorites: []
};

const getters = {
    jokes: state =>
        state.jokes.filter(
            joke => !state.favorites.some(favorite => favorite.id == joke.id)
        ),
    favoriteJokes: state => state.favorites,
    isFavorite: state => jokeId =>
        state.favorites.some(favorite => favorite.id == jokeId),
    canAddNewFavorite: state => state.favorites.length < 10
};

const actions = {
    setJokes: ({ commit }, jokes) => commit("setJokes", jokes),
    addFavorite: ({ state, commit }, joke) => {
        if (!state.favorites.some(favoriteJoke => favoriteJoke.id == joke.id)) {
            commit("addFavorite", joke);
        }
    },
    removeFavorite: ({ state, commit }, joke) => {
        if (state.favorites.some(favoriteJoke => favoriteJoke.id == joke.id)) {
            commit("removeFavorite", joke);
        }
    }
};

const mutations = {
    setJokes: (state, jokes) => (state.jokes = jokes),
    addFavorite: (state, joke) => state.favorites.push(joke),
    removeFavorite: (state, favoriteToRemove) => {
        const index = state.favorites.findIndex(
            joke => joke.id === favoriteToRemove.id
        );

        state.favorites.splice(index, 1);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
