import React from 'react'

//Memo guarda en memoria para NO renderizar de nuevo el componente
//Si las props no cambian, no se renderiza de nuevo
export const ShowIncrement = React.memo(({ increment }) => {
  console.log('Me volví a generar :(')

    return (
        <button className="btn btn-primary" onClick={
            () => {
                increment(2)
            }
        }>Incrementar</button>

  )
})
