import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {
  const navigate = useNavigate();

  //Desestructuramos el método LOGIN del AuthContext

  const {login, state} = useContext(AuthContext)

  const handleLogin = () => {
    //Accediendo al contexto para obtener el login
    const name = 'Facundo Rodriguez';
    
    login(name);


    navigate('/', { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
