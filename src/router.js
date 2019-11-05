import Vue from "vue";
import Router from "vue-router";
import Jokes from "./routes/jokes.js";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: "/",
    routes: [...Jokes]
});

export default router;
