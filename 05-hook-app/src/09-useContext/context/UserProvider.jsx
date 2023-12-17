import { useState } from "react";
import { UserContext } from "./UserContext";

//'children' hace referencia a todos los componentes que proveerá
export const UserProvider = ({ children }) => {
  
  //Para cambiar el estado del usuario
  const [user, setUser] = useState();



  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
