import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

import heroes from "../../data/heroes";

describe("08-imp-exp Test", () => {

    test("getHeroeById Should return a heroe object", () => {
        const heroe = getHeroeById(1);

        const heroeData = heroes.find((heroe) => heroe.id === 1);

        expect(heroe).toEqual(heroeData);

        // console.log(heroe);
        // console.log(heroeData);
    });

    test("should return undefined if Hero does not exist", () => {
        const heroe = getHeroeById(10);

        expect(heroe).toBe(undefined);
    });

    test("getHeroesByOwner Should return a list of heroe objects", () => {
        const owner = "DC";

        const heroesByOwnerData = getHeroesByOwner(owner);
        const heroesByOwner = heroes.filter((heroe) => heroe.owner === owner);

        expect(heroesByOwnerData).toEqual(heroesByOwner);
    });

    test("getHeroesByOwner Should return 2 if parameter is Marvel", () => {
        const owner = "Marvel";
        const heroesByOwner = getHeroesByOwner(owner);

        expect(heroesByOwner.length).toBe(2);
    })

});
