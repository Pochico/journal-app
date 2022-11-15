import { getSaludo } from "../../base/02-template-string";

// Esto le da nombre al bloque de tests, que se agrupará en la consola bajo este nombre
describe("02-template-string Tests", () => {

    // Esto es el test llamado Template String, que se ejecuta bajo el nombre
    test("getSaludo Should return Hola John", () => {
        // 1. Inicializar
        const nombre = "John";

        // 2. Ejecutar
        const saludo = getSaludo(nombre);

        // 3. Comprobar
        expect(saludo).toBe(`Hola ${nombre}`);
    });

    test("getSaludo Should return Hola Roberto if there is no name argument", () => {
        
        // 2. Ejecutar
        const saludo = getSaludo();

        // 3. Comprobar
        expect(saludo).toBe(`Hola Roberto`);
    });

});
