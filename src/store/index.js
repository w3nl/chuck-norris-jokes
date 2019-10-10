import Vue from "vue";
import Vuex from "vuex";
import jokes from "./modules/jokes";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        jokes
    },
    plugins: [
        createPersistedState({
            storage: window.localStorage
        })
    ]
});
