import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const newUser = {
  id: 123,
  name: "Juan",
  email: "juan@google.com",
};

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);

  const handleSetUser = () => {
    // Establecer el usuario y esperar a que se complete la actualización del estado
    setUser(newUser, () => {
      // La siguiente línea de código se ejecutará después de que se haya actualizado el estado
      console.log("Usuario establecido correctamente");
    });
  };

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-primary" onClick={handleSetUser}>
        Establecer usuario
      </button>
    </>
  );
};
