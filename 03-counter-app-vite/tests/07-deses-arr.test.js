import {retornaArreglo} from '../src/base-pruebas/07-deses-arr'

describe('Pruebas en 07-deses-arr.js', () => {

    test('Debe retornar un STRING y un NUMBER', () => { 
     
        //1. Inicialización
        const [letters, numbers] = retornaArreglo(); 

        //2. Observar el comportamiento
        expect(letters).toEqual(expect.any(String));
        expect(numbers).toEqual(expect.any(Number));


     })




});