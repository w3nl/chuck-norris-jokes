import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";

Vue.config.productionTip = false;

if (
    process.env.NODE_ENV === "development" &&
    process.env.VUE_APP_USE_MOCK_API == "true"
) {
    require("./mock/mocker");
}

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");
