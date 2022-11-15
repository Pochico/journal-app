import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("05-funciones Tests block", () => {
    test("Should return an object with uid and username", () => {
        // 1. Inicializar
        const defaultUser = {
            uid: "ABC123",
            username: "El_Papi1502",
        };

        // 2. Ejecutar
        const user = getUser();

        // 3. Comprobar
        expect(user).toEqual(defaultUser);
    });

    test("getUsuarioActivo Should return an object after passing an argument", () => {
        // 1. Inicializar
        const defaultUser = {
            uid: "ABC567",
            username: "Fernando",
        };

        // 2. Ejecutar
        const user = getUsuarioActivo("Fernando");

        // 3. Comprobar
        expect(user).toEqual(defaultUser);
    });
});
