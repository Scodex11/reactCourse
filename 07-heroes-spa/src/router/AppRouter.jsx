import { Navigate, Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage as Login } from "../auth";
import { PrivateRoute, PublicRoute } from "./";

export const AppRouter = () => {
  return (
    <>
      <Routes>

        {/* Rutas públicas */}
        <Route
          path="login/*"
          element={
            //Encapsulamos las rutas públicas en un componente
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<Login />} />
              </Routes>
            </PublicRoute>
          }
        />


        {/* Rutas privadas */}
        <Route
          path="/*"
          element={
            //Encapsulamos las rutas privadas en un componente
            <PrivateRoute>
              {/* Rutas privadas */}
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
