import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('')
  
    const onInputChange = ({target}) => {
        setInputValue(target.value); //Enviamos el valor obtenido por teclado al useState
    }

    
    const onSubmit = (event) => {
        event.preventDefault(); //Evita que refresque 
        
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim()); //Enviamos el valor del useState al componente padre (GifExpertApp)
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input  
                type="text"
                placeholder="Escribe la categoria del gif..."
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
  
  )
}
