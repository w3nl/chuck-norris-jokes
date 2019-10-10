import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const API_BASE_URL = process.env.VUE_APP_API_URL;

let mock = new MockAdapter(axios);

import randomJokes from "./data/random-jokes.json";

mock.onGet(API_BASE_URL + "/jokes/random/10").reply(200, randomJokes);
