import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";
import heroes from "../src/data/heroes";

describe("Pruebas en 08-imp-exp.js", () => {
  test("getHeroesByID -> retorna Héroe", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };

    expect(heroe).toEqual(heroeData);
  });

  test("Si NO existe RETORNA un valor Falsy()", () => {
    const id = 100;
    const heroe = getHeroeById(id);
    expect(heroe).toBeFalsy();
  });



  test("Debe retornar un arreglo con los heres de DC", () => {
  
    const owner = "DC";

    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((heroe) => heroe.owner === owner);
    
    expect(heroes).toEqual(heroesData);
});

test("Debe retornar un arreglo con los heres de Marvel", () => {
    
    //1. Inicializamos los datos
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    
    //Traemos los heroes que coinciden con el owner
    const heroesData = heroes.filter((heroe) => heroe.owner === owner);
    
    //Comparamos
    expect(heroes).toEqual(heroesData);
  });
});
