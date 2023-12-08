import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('Prueba de getUser()', () => { 
        
        //1. Inicialización
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        //2. Estímulo: método con el que vamos a probar
        const user = getUser();
        
        //3. Observar el comportamiento:
            //Para comparar objetos necesitamos usar: toEqual o toStrictEqual
        expect(user).toEqual(userTest);
     })


     test('Prueba getUserActivo', () => { 
        
        //1. Inicialización
        const nombre = "Facundo";
        
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        //2 Estímulo 
        const user = getUsuarioActivo(nombre);

        //3 Obs. comportamiento

        expect(userTest).toEqual(user)




      })
})