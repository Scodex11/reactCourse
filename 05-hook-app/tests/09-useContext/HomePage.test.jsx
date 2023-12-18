import { render, screen, fireEvent } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/"


describe('Prueba en HomePage.jsx', () => { 

    const user = {
        name: 'Andres',
        email: 'andresito@gmail.com'
    }

    test('debe de mostrar el componente HOME SIN el USER', () => {
        
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        
        const preLabel = screen.getByLabelText('pre');
        expect( preLabel.innerHTML ).toBe('null');

    })


    test('debe de mostrar el componente HOME CON el USER', () => {
        
        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );
        
        const preLabel = screen.getByLabelText('pre');
        const newUser = JSON.stringify(user, null, 3);

        expect( preLabel.innerHTML ).toBe(newUser);


    })
 })