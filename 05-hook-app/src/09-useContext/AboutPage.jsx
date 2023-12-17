import { useContext } from "react" //Es el hook
import { UserContext } from "./context/UserContext"; //Es el contexto creado

export const AboutPage = () => {
  //Desescrutamos el contexto
  const { user } = useContext(UserContext); 

  return (
    
    <>
      <h1>About <small>{user && user.name ? user.name : 'Usuario Desconocido'}</small></h1>
      <hr />

      <pre>{ JSON.stringify(user, null, 3) }</pre>
    </>
  )
}
