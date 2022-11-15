import getHeroeByIdAsync from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("09-promesas Test Async Functions", () => {

    test("should get a heroe by id", (done) => {
        const heroe = heroes[1];

        getHeroeByIdAsync(2).then((heroeData) => {
            expect(heroeData).toBe(heroe);
            done();
        });

    });

    test("should fail when heroe is not found", () => {

        const error = "Hero not found";

        return expect(getHeroeByIdAsync(23)).rejects.toBe("Hero not found");

        // getHeroeByIdAsync().catch(err => {
        //     expect()
        // })

    });

});
