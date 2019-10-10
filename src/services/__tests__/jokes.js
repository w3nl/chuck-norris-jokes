import { JokesService } from "../jokes";
import "@/mock/mocker";
import { createLocalVue } from "@vue/test-utils";
import store from "@/store/index.js";

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
    });
});
