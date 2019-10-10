import axios from "axios";

const getClient = () => {
    let options = {
        baseURL: process.env.VUE_APP_API_URL,
        headers: {}
    };

    const client = axios.create(options);

    // Add a request interceptor
    client.interceptors.request.use(
        requestConfig => requestConfig,
        requestError => {
            return Promise.reject(requestError);
        }
    );

    // Add a response interceptor
    client.interceptors.response.use(
        response => response,
        error => {
            return Promise.reject(error);
        }
    );

    return client;
};

/**
 * Defines the API Client.
 */
export default {
    /**
     * Performs a GET request.
     *
     * @param {string} url
     * @param {object} [conf={}]
     *
     * @return {mixed}
     */
    get(url, conf = {}) {
        return getClient()
            .get(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    },

    /**
     * Performs a DELETE request.
     *
     * @param {string} url
     * @param {object} [conf={}]
     *
     * @return {mixed}
     */
    delete(url, conf = {}) {
        return getClient()
            .delete(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    },

    /**
     * Performs a HEAD request.
     *
     * @param {string} url
     * @param {object} [conf={}]
     *
     * @return {mixed}
     */
    head(url, conf = {}) {
        return getClient()
            .head(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    },

    /**
     * Performs an OPTIONS request.
     *
     * @param {string} url
     * @param {object} [conf={}]
     *
     * @return {mixed}
     */
    options(url, conf = {}) {
        return getClient()
            .options(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    },

    /**
     * Performs a POST request.
     *
     * @param {string} url
     * @param {object} [data={}]
     * @param {object} [conf={}]
     *
     * @return {mixed}
     */
    post(url, data = {}, conf = {}) {
        return getClient()
            .post(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    },

    /**
     * Performs a PUT request.
     *
     * @param {string} url
     * @param {object} [data={}]
     * @param {object} [conf={}]
     *
     * @return {mixed}
     */
    put(url, data = {}, conf = {}) {
        return getClient()
            .put(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    },

    /**
     * Performs a PATCH request.
     *
     * @param {string} url
     * @param {object} [data={}]
     * @param {object} [conf={}]
     *
     * @return {mixed}
     */
    patch(url, data = {}, conf = {}) {
        return getClient()
            .patch(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }
};
