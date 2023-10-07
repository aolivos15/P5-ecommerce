import { Routes, Route } from "react-router-dom";
import { HomePage } from '../views/IndexView';
import { NavBar } from "../components/NavBar/NavBar";
import { CatalogNavBar } from "../components/CatalogNavBar/CatalogNavBar";

export const RouterApp = () => {
  return (
    <>
      <NavBar />
      <CatalogNavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}
