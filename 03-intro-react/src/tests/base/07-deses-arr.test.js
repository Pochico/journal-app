import { retornaArreglo } from "../../base/07-deses-arr";

describe('07-deses-arr Tests block', () => {

    test('retornaArreglo Should return ["ABC", 123]', () => { 

        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    });

});