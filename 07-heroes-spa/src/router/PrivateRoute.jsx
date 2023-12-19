import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
  

    const { logged } = useContext(AuthContext);

    //Lógica para mostrar las rutas privadas o no
    return (logged) ? children : <Navigate to="/login" />;
};
