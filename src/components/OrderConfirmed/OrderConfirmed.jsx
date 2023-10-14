import { useContext, useEffect, useState } from "react"
import UserContext from "../../context/UserContext/UserContext";

export const OrderConfirmed = () => {

  const userCtx = useContext(UserContext);
  const { user } = userCtx;

  useEffect(() => {
    //clearCart();
  }, [])

  return (
    <>
      <div className="container d-flex justify-content-center my-5">
        <div className="row">
          <div className="col text-center">
            <h3 className="mb-4">¡Gracias, {user.name}! Hemos recibido tu orden de compra.</h3>
            <h4>En breve prepararemos tu pedido.</h4>
            <p></p>
            <div className="d-flex justify-content-center my-5">
              <button className="custom-btn fs-4 mb-5" onClick={() => { navigate('/') }}><i className="fa-solid fa-circle-left me-2"></i>Volver al inicio</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
