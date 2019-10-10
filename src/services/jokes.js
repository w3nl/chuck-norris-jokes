import ApiClient from "@/client";
import store from "@/store/index.js";

let interval;

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
     * Get random favorite joke.
     *
     * @return {Promise}
     */
    static getRandomFavoriteJoke() {
        if (!store.getters["jokes/canAddNewFavorite"]) {
            store.dispatch("jokes/resetTimer");

            return;
        }

        return ApiClient.get("/jokes/random/1").then(({ data }) => {
            store.dispatch("jokes/addFavorite", data.value[0]);

            return data.value;
        });
    }

    /**
     * Get a random favorite joke every 5 seconds.
     */
    static getRandomFavoriteJokeTimer() {
        if (interval) {
            store.dispatch("jokes/resetTimer");
            interval = clearInterval(interval);

            return;
        }

        store.dispatch("jokes/setTimer");
        this.getRandomFavoriteJoke();

        interval = setInterval(this.getRandomFavoriteJoke.bind(this), 5000);
    }
}

export { JokesService };
