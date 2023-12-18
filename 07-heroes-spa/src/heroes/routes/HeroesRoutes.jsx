import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";

import { DcPages, MarvelPages, HeroPage, SearchPage } from "../../heroes";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="dc" element={<DcPages />} />
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="search" element={<SearchPage />} />
          
          <Route path="/" element={<Navigate to="/marvel" />} />

        </Routes>
      </div>
    </>
  );
};
