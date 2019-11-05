const JokesPage = () => import("@/pages/JokesPage.vue");
const JokePage = () => import("@/pages/JokePage.vue");

export default [
    {
        path: "/",
        name: "jokes-overview",
        component: JokesPage
    },
    {
        path: "/joke/:jokeId",
        name: "joke-detail",
        component: JokePage,
        props: route => ({
            jokeId: route.params.jokeId
        })
    }
];
