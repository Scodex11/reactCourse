import {getSaludo} from '../src/base-pruebas/02-template-string';

describe('Pruebas en 02--tempalte string', () => { 
    
    test('getSaludo debe de retornar "Hola + {nombre}"', () => { 
        //1. Inicialización
        const nombre = 'Facundo';
        
        //2. Estímulo: guardamos el método con el que vamos a probar
        const saludo = getSaludo(nombre);
        
        //3. Observar el comportamiento: 
            //Esperamos que el saludo sea igual al del método en SRC/base-pruebas/02-template-string.js
        expect(saludo).toBe('Hola ' + nombre);


     })

 })