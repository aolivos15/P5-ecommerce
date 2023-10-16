import { useContext, useEffect } from "react"
import UserContext from "../../context/UserContext/UserContext";
import CartContext from "../../context/CartContext/CartContext";
import { useNavigate } from "react-router-dom";

export const OrderConfirmed = () => {

  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { user } = userCtx;
  const cartCtx = useContext(CartContext);
  const { clearCart } = cartCtx;

  useEffect(() => {
    clearCart();
  }, [])

  return (
    <>
      <div className="container d-flex justify-content-center my-5">
        <div className="row">
          <div className="col text-center p-5">
            <h3 className="mb-4 fw-bold">¡Gracias, {user.name}! Hemos recibido tu orden de compra.</h3>
            <h4>En breve prepararemos tu pedido.</h4>
            <p></p>
            <div className="d-flex justify-content-center my-5">
              <button className="custom-btn fs-4 mb-5" onClick={() => { navigate('/') }}>
                <i className="fa-solid fa-circle-left me-2"></i>Volver al inicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
