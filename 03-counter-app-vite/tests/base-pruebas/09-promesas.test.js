import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe("Pruebas con promesas", () => {
  
  test("getHeroeByIdAsync debe retornar un héroe async", (done) => {
    const id = 1;

    const heroeById = heroes.find((h) => h.id === id);

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroeById);
      done();
    });
  });


  test("getHeroeByIdAsync debe retornar un error si el héroe por id no existe", (done) => {
    const id = 10;

    getHeroeByIdAsync(id)
    .then((heroe) => {
      expect(heroe).toBeFalsy();
      done();
    })

    .catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });



});
