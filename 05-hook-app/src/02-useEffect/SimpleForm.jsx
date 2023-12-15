import { useEffect, useState } from 'react';
import { Message } from './Message';





export const SimpleForm = () => {
    
    //TODO: Busar qué es una propiedad computada de los objetos  en JS y para que sirven
    
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    });
    
    const { username, email } = formState;
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }
    
    // si NO tiene dependencias, se ejecuta cada vez que se llame al SimpleForm
    
    //Se ejecuta UNA vez
    useEffect( () => {
        // console.log('useEffect called!');
    }, []);
    
    //Se ejecuta cuando cambia el formState
    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);
    
    
    //Se ejecuta cuando cambia el email
    useEffect( () => {
        // console.log('email changed!');
    }, [ email ]);

    
    
  return (
    <>
            <h1>Formulario Simple</h1> 
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />


            {
                (username === 'strider2' ) && <Message />
            }

        </>
  )
}
