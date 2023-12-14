import { useState } from 'react'
import PropTypes from 'prop-types'

/* DESCRIPCIÓN del COMPONTENTE */
// Componente que renderiza un formulario para agregar una nueva categoría y se llama desde GiftExpertApp

export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('')
  
    const onInputChange = ({target}) => {
        setInputValue(target.value); //Enviamos el valor obtenido por teclado al useState
    }

    
    const onSubmit = (event) => {
        event.preventDefault(); //Evita que refresque 
        
        if (inputValue.trim().length <= 1) return;

        setInputValue('')
        onNewCategory(inputValue.trim()); //Enviamos el valor del useState al componente padre (GifExpertApp)
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input  
                type="text"
                placeholder="Escribe la categoria del gif..."
                value={inputValue} //Valor del useState
                onChange={ onInputChange } //Método que permite cambiar el estado de value dentro de el input
            />
        </form>
  
  )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
