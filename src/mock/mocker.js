import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const API_BASE_URL = process.env.VUE_APP_API_URL;

let mock = new MockAdapter(axios);

import randomJokes from "./data/random-jokes.json";
import randomJoke from "./data/random-joke.json";

mock.onGet(API_BASE_URL + "/jokes/random/10").reply(200, randomJokes);
mock.onGet(API_BASE_URL + "/jokes/random/1").reply(200, randomJoke);
