import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";



const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));  //Obtenemos el usuario del localStorage y convertimos el string a objeto


};


//Componente que transmitirá información necesaria para TODOS los componentes que se encuentren dentro de él

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init); //Hook para manejar el estado de la autenticación

  const login = (name = '') => {
    const action = {
      type: types.Login,

      //Data que se enviará al 'reducer'
      payload: {
        id: "ABC",
        name: name,
      },
    };

    dispatch(action); //Método para ejecutar la acción con el 'reducer'
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
