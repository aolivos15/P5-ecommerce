import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, CategoryPage, ProductPage, CartPage, CheckoutPage, SignUpPage, LogInPage } from '../views/IndexView';
import { NavBar } from "../components/NavBar/NavBar";
import { CatalogNavBar } from "../components/CatalogNavBar/CatalogNavBar";
import { Footer } from "../components/Footer/Footer";

export const RouterApp = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="categoria/:category" element={<CategoryPage />} />
          <Route path="productos/:name" element={<ProductPage />} />
          <Route path="carrito/" element={<CartPage />} />
          <Route path="checkout/" element={<CheckoutPage />} />
          <Route path="signup/" element={<SignUpPage />} />
          <Route path="login/" element={<LogInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}
