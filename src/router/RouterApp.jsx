import { Routes, Route } from "react-router-dom";
import { HomePage } from '../views/IndexView';
import { NavBar } from "../components/NavBar/NavBar";

export const RouterApp = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}
