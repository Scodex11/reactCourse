import { Navigate, Route, Routes } from "react-router-dom";
// import { Navbar } from "../ui";
import { DcPages, HeroesRoutes, MarvelPages } from "../heroes";
import { LoginPage as Login } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
