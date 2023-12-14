import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar el valor del TextInput', () => { 
        
        //Por ahora mandamos como prop una función vacía
        render(<AddCategory onNewCategory={ () => {} } />);

        const input  = screen.getByRole('textbox')
        fireEvent.input( input, { target: { value: 'Satanas' } } )
        expect(input.value).toBe('Satanas')
     })

     test('Debe LLAMAR a onNewCategory si el INPUT tiene un VALOR', () => { 
        
        const inputValue = 'Satanas';
        const onNewCategory = jest.fn(); //Función MOCK de Jest
        render(<AddCategory onNewCategory={ onNewCategory } />);
        
        const input  = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit(form)

        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

      })

      test('Si el usuario intenta ingresar un inputValue <=1 NO debe poder enviar', () => { 
        
        const inputValue = 'S'

        const onNewCategory = jest.fn(); //Función MOCK de Jest
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input  = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalledTimes(0)
        expect(onNewCategory).not.toHaveBeenCalled();
        
       })
});