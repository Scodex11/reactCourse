import { bool } from 'prop-types';
import { getGifs } from '../../src/helpers/getGifs';


describe('Preubas en GetGifs -> helpers', () => { 

    //Es asincrona porque estamos evaluando una función asincrona
    test('Debe retonar el arrreglo de gifs', async() => { 
        const gifs = await getGifs('One Punch');  //Guardamos el arreglo en 'gifs'
        expect(gifs.length).toBe(10);

        expect(gifs[0]).toEqual({
            id: expect.any(String), 
            title: expect.any(String),
            url: expect.any(String)
        })  //Esperamos que el primer elemento del arreglo sea igual a este objeto
     
        })

 })