import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';


describe('Pruebas en <MainApp />', () => {
    
    test('debe de mostrar el HomePage', () => {
        
        render( 
            <MemoryRouter>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('Home Page') ).toBeTruthy();
        // screen.debug()

    });

    test('debe de mostrar el LoginPage', () => {
        
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();
        // screen.debug()

    });

    test('debe de mostrar el About', () => {
        
        render( 
            <MemoryRouter initialEntries={['/about']}>
                <MainApp /> 
            </MemoryRouter>
        );

        // const about = screen.getByRole('heading', { name: 'About Page' });
        expect( screen.getByText('Usuario Desconocido') ).toBeTruthy();
        screen.debug()

    });

});