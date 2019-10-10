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
}

export { JokesService };
