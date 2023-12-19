import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
    const { logged, authState} = useContext(AuthContext);
    // console.log('Logged: '+logged);
    // console.log('AuthState: '+authState);

    const {pathname, search} = useLocation(); //Obtenemos los queryParams
    const lastPath = `${pathname}${search}`; //Obtenemos la ruta actual

    localStorage.setItem('lastPath', lastPath);


    // const lastPath = useMemo(() => {
    //     // console.log('lastPath: '+lastPath);
    //     console.log('pathname: '+pathname);
    //     console.log('search: '+search);
    //     return `${pathname}${search}`;
    // }, [pathname, search]);

    //  // Guardamos en el localStorage solo cuando lastPath cambia
    //  useMemo(() => {
    //     localStorage.setItem('lastPath', lastPath);
    // }, [lastPath]);

    // console.log('re-render');



    //Lógica para mostrar las rutas privadas o no
    return (logged) ? children : <Navigate to="/login" />;
};
