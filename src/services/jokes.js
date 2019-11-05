import ApiClient from "@/client";
import store from "@/store/index.js";

/**
 * Jokes service.
 */
class JokesService {
    /**
     * Get jokes with the search.
     *
     * @param {string} searchTest
     *
     * @return {Promise}
     */
    static getJokes(searchTest) {
        return ApiClient.get("/jokes/search?query=" + searchTest).then(
            ({ data }) => {
                store.dispatch("jokes/setJokes", data.result);

                return data.result;
            }
        );
    }
    /**
     * Get a single joke.
     *
     * @param {string} jokeId
     *
     * @return {Promise}
     */
    static getJoke(jokeId) {
        return ApiClient.get("/jokes/" + jokeId).then(({ data }) => {
            store.dispatch("jokes/addJoke", data);

            return data;
        });
    }
}

export { JokesService };
