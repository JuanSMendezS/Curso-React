import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08', () => {

    test('getHeroeById debe retornar por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroById retornar undefined si no existe ', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    })

    //Tarea

    test('Retornar heroes de DC', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);

        expect(hero.length).toBe(3);
        expect(hero).toEqual(heroes.filter((heroe)=>heroe.owner === owner));
    })


    test('Retornar heroes de Marvel', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);

        expect(hero.length).toBe(2);
        expect(hero).toEqual(heroes.filter((heroe)=>heroe.owner === owner));
    })

})
