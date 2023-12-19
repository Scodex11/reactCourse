import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();

  //Desestructuramos el método LOGIN del AuthContext

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const lastLogin = localStorage.getItem("lastPath") || "/";

    //Accediendo al contexto para obtener el login
    const name = "Facundo Rodriguez";

    login(name);

    navigate(lastLogin, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
