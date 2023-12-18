import { render, screen, fireEvent } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext"


describe('Prueba en LoginPage.jsx', () => { 

    const user = {
        name: 'Andres',
        email: 'andresito@gmail.com'
    }

    test('debe de mostrar el componente LOGIN SIN el USER', () => {
        
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        
        const preLabel = screen.getByLabelText('pre');
        expect( preLabel.innerHTML ).toBe('null');

    })

    test('debe de mostrar el componente LOGIN CON el USER', () => {
        
        render(
            <UserContext.Provider value={{ user: user }}>
                <LoginPage />
            </UserContext.Provider>
        );
        
        const preLabel = screen.getByLabelText('pre');
        const newUser = JSON.stringify(user, null, 3);

        expect( preLabel.innerHTML ).toBe(newUser);
        })

        test('Debe presionar setUser cuando haga clic en el botón', () => {
            const setUserMock = jest.fn();
            
            render(
                <UserContext.Provider value={{ user: null, setUser: setUserMock}}>
                    <LoginPage />
                </UserContext.Provider>
            );

            const button = screen.getByRole('button');
            fireEvent.click(button);

            expect(setUserMock).toHaveBeenCalled();
            
        })

 })