import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('Retornar un heroe el async ', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    })

    test('Retornar un error si no existe registro ', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)       
            .catch(err => {
                expect(err).toBe('No se pudo encontrar el héroe '+ id);
                done();
            });
    })
})
