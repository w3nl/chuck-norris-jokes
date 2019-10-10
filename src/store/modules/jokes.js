const state = {
    jokes: []
};

const getters = {
    jokes: state => state.jokes
};

const actions = {
    setJokes: ({ commit }, jokes) => commit("setJokes", jokes)
};

const mutations = {
    setJokes: (state, jokes) => (state.jokes = jokes)
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
