import { useContext } from "react" //Es el hook
import { UserContext } from "./context/UserContext"; //Es el contexto creado

export const HomePage = () => {

  //Desescrutamos el contexto
  const { user } = useContext(UserContext); 

  return (
    
    <>
      <h1>Home Page <small>{ user?.name }</small></h1>
      <hr />

      <pre>{ JSON.stringify(user, null, 3) }</pre>
    </>
  )
}
