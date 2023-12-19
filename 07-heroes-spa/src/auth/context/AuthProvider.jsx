import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

//Función que se ejecutará el 'useReducer' para inicializar el estado
const init = () => {
  const user = JSON.parse(localStorage.getItem("user")); //Obtenemos el usuario y convertimos el string a objeto
  return { logged: !!user, user };
};

//Componente que transmitirá información necesaria para TODOS los componentes que se encuentren dentro de él

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init); //Hook para manejar el estado de la autenticación

  const login = (name = "") => {
    const user = { id: "ABC", name };
    const action = { type: types.Login, payload: user }; //Data que se enviará al 'reducer'

    localStorage.setItem("user", JSON.stringify(user)); //Guardamos el usuario para no perderlo al refrescar
    dispatch(action); //Método para ejecutar la acción con el 'reducer'
  };

  const logout = () => {
    localStorage.removeItem("user"); //Eliminamos el usuario del localStorage

    const action = { type: types.Logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
