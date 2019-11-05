import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const API_BASE_URL = process.env.VUE_APP_API_URL;

let mock = new MockAdapter(axios);

import allJokes from "./data/all-jokes.json";
import singleJoke from "./data/single-joke.json";

mock.onGet(API_BASE_URL + "/jokes/search?query=dev").reply(200, allJokes);
mock.onGet(API_BASE_URL + "/jokes/random").reply(200, singleJoke);
