import { useNavigate } from "react-router-dom"
import { CartList } from "../CartList/CartList"

export const CartContainer = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1 className="resp-title text-center my-5 fs-1">Carrito de compras</h1>
        <CartList />
        <div className="d-flex justify-content-center my-5">
          <button className="custom-btn fs-4 mb-5" onClick={() => {navigate('/checkout')}}>Continuar con la compra<i className="fa-solid fa-circle-right ms-3"></i></button>
        </div>
      </div>
    </>
  )
}
