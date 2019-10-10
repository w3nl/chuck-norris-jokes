import { createLocalVue } from "@vue/test-utils";
import store from "@/store/index.js";
import { JokesService } from "../jokes";
import "@/mock/mocker";

const localVue = createLocalVue();

localVue.use(store);

describe("Check if we get random jokes", () => {
    it("Check if we get 10 random jokes", async () => {
        const jokes = await JokesService.getJokes(10);

        expect(jokes.length).toBe(10);
    });

    it("Check if we get 10 random jokes from the vuex store", async () => {
        await JokesService.getJokes(10);

        expect(store.getters["jokes/jokes"].length).toBe(10);
        expect(store.getters["jokes/favoriteJokes"].length).toBe(0);
    });

    it("Check if we get a random joke", async () => {
        const jokes = await JokesService.getRandomFavoriteJoke();

        expect(jokes.length).toBe(1);
    });

    it("Check if we get a random favorite joke from the vuex store", async () => {
        await JokesService.getRandomFavoriteJoke();

        expect(store.getters["jokes/favoriteJokes"].length).toBe(1);
        expect(store.getters["jokes/jokes"].length).toBe(9);
        expect(store.getters["jokes/canAddNewFavorite"]).toBe(true);
    });

    it("Check if we can add all jokes as favorite", async () => {
        const jokes = await JokesService.getJokes(10);

        jokes.forEach(joke => {
            store.dispatch("jokes/addFavorite", joke);
        });

        expect(store.getters["jokes/favoriteJokes"].length).toBe(10);
        expect(store.getters["jokes/jokes"].length).toBe(0);
        expect(store.getters["jokes/canAddNewFavorite"]).toBe(false);
    });

    it("Check the timer is on", () => {
        const firstJoke = store.getters["jokes/favoriteJokes"][0];

        store.dispatch("jokes/removeFavorite", firstJoke);

        expect(store.getters["jokes/favoriteJokes"].length).toBe(9);
        expect(store.getters["jokes/jokes"].length).toBe(1);
        expect(store.getters["jokes/canAddNewFavorite"]).toBe(true);

        JokesService.getRandomFavoriteJokeTimer();

        expect(store.getters["jokes/timerIsOn"]).toBe(true);
    });

    it("Check the timer if off", () => {
        JokesService.getRandomFavoriteJokeTimer();

        expect(store.getters["jokes/timerIsOn"]).toBe(false);
    });
});
