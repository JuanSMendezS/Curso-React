import { string } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas de 07-deses-arr', () => {
    test('debe de retornar un string y número ', () => {
        const [letters, numbers] = retornaArreglo();

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        //cualquier tipo de String
        expect(letters).toEqual(expect.any(String));
    })

})
