import {fireEvent, screen, render} from '@testing-library/react';
import {GifExpertApp} from '../src/GifExpertApp.jsx';

describe('Pruebas en GifExpertApp', () => { 
    
    test('Debe de mostrar el componente correctamente', () => {
        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    })

    test('Debe de agregar una categoria nueva', () => {
        const categories = ['Droga en bolsita'];

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: categories[0]}});        
        fireEvent.submit(form);

        /*Se imprime por pantalla la nueva categoria */

    })


 })