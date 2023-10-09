import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, CategoryPage, ProductPage } from '../views/IndexView';
import { NavBar } from "../components/NavBar/NavBar";
import { CatalogNavBar } from "../components/CatalogNavBar/CatalogNavBar";
import { Footer } from "../components/Footer/Footer";

export const RouterApp = () => {

  return (
    <>
      <NavBar />
      <CatalogNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="categoria/:category" element={<CategoryPage />} />
        <Route path="productos/:name" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}
