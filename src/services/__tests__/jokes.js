import { createLocalVue } from "@vue/test-utils";
import store from "@/store/index.js";
import { JokesService } from "../jokes";
import "@/mock/mocker";
import singleJoke from "@/mock/data/single-joke.json";

const localVue = createLocalVue();

localVue.use(store);

describe("Check if we get random jokes", () => {
    it("Check if we get 10 random jokes", async () => {
        const jokes = await JokesService.getJokes("dev");

        expect(jokes.length).toBe(156);
    });

    it("Check if we get 10 random jokes from the vuex store", async () => {
        await JokesService.getJokes("dev");

        expect(store.getters["jokes/jokes"].length).toBe(156);
    });

    it("Check if we get a single joke", async () => {
        const joke = await JokesService.getJoke("random");

        expect(JSON.stringify(joke)).toBe(JSON.stringify(singleJoke));
    });

    it("Check if we get a single joke from the vuex store", async () => {
        await JokesService.getJoke("random");

        expect(store.getters["jokes/jokes"].length).toBe(157);
        expect(
            JSON.stringify(
                store.getters["jokes/singleJoke"]("OFLD9DntR2iKRb1IaVa4Vg")
            )
        ).toBe(JSON.stringify(singleJoke));
    });
});
