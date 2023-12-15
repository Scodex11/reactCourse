import {useRef} from 'react'

export const FocusSreen = () => {

    const inputRef = useRef()

    return (
        <>
            <h1>Probndo useRef</h1> 
            <hr />

            <h3>Nombre:</h3>
            <input ref= {inputRef} type="text" placeholder='Ingrese su nombre' className='form-control' />

            <button
                className='btn btn-outline-primary mt-5'
                onClick = {() => {
                    inputRef.current.select()
                    console.log(inputRef)
                }}
            >
                Focus
            </button>


        </>

    )


  
}
