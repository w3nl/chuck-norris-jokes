import { JokesService } from "../jokes";
import "@/mock/mocker";

describe("Check if we get random jokes", () => {
    it("Check if we get 10 random jokes", async () => {
        const jokes = await JokesService.getJokes(10);

        expect(jokes.length).toBe(10);
    });
});
