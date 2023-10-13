import { useNavigate } from "react-router-dom"
import { CartList } from "../CartList/CartList"

export const CartContainer = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1 className="resp-title text-center my-5 fs-1">Carrito de compras</h1>
        <CartList />
      </div>
    </>
  )
}
