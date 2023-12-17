// Pueden haber VARIOS context

//Su objetivo es compartir información entre componentes de React, sin tener que pasar props manualmente entre cada nivel de la aplicación.
import { createContext } from 'react';

export const UserContext = createContext();


