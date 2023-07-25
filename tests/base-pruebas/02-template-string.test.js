import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas del 02', () => {

    test('getSaludo debe retornar Hola Fernando', () => {
        const nombre = 'Fernando';
        const message = getSaludo(nombre);

        expect(message).toBe(`Hola ${nombre}`);
    });

})
