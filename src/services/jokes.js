import ApiClient from "@/client";
import store from "@/store/index.js";

/**
 * Jokes service.
 */
class JokesService {
    /**
     * Get random jokes.
     *
     * @param {number} amount
     *
     * @return {Promise}
     */
    static getJokes(amount) {
        return ApiClient.get("/jokes/random/" + amount).then(({ data }) => {
            store.dispatch("jokes/setJokes", data.value);

            return data.value;
        });
    }

    /**
     * Get a random favorite joke.
     */
    static getRandomFavoriteJoke() {
        if (!store.getters["jokes/canAddNewFavorite"]) {
            store.dispatch("jokes/resetTimer");

            return;
        }

        store.dispatch("jokes/setTimer");

        ApiClient.get("/jokes/random/1").then(({ data }) => {
            store.dispatch("jokes/addFavorite", data.value[0]);
        });

        setTimeout(this.getRandomFavoriteJoke.bind(this), 5000);
    }
}

export { JokesService };
