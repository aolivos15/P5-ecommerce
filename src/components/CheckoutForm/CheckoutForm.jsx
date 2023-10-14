import { useContext, useState } from "react"
import CartContext from "../../context/CartContext/CartContext";
import UserContext from "../../context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { PayPalButton } from "../PayPal/PayPalButton";

export const CheckoutForm = () => {

  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const { cart, formatPrice, getNumberOfItemsInCart, getCartTotal } = cartCtx;

  const userCtx = useContext(UserContext);
  const { user } = userCtx;

  const [ data, setData ] = useState({
    name: user.name ? user.name : '',
    lastname: user.lastname ? user.lastname : '',
    email: user.email ? user.email : '',
    address: user.address ? user.address : '',
    city: user.city ? user.city : '',
    state: user.state ? user.state : '',
    country: user.country ? user.country : '',
    phone: user.phone ? user.phone : ''
  });

  // When the user is filling the form
  const onChangeData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  const onEditCartClick = () => {
    navigate('/carrito');
  }


  return (
    <>
      <div className="container py-5 mb-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-4">
              <span>Carrito</span>
              <span className="badge bg-first rounded-pill">{getNumberOfItemsInCart()}</span>
            </h4>
            <ul className="list-group mb-3">

              {
                cart.map((product) => (
                  <li key={product._id.concat(product.variant)} className="list-group-item d-flex justify-content-between text-reset">
                    <div className="me-5">
                      <h6 className="fs-5 mb-0">{product.title}</h6>
                      <small>{product.variant}</small>
                    </div>
                    <span>{formatPrice.format(product.price)}</span>
                  </li>
                ))
              }

              <li className="list-group-item d-flex justify-content-between text-reset">
                <div>
                  <h6 className="fs-5 mb-0">Costo de envío</h6>
                </div>
                <span>$3.990</span>
              </li>

              <li className="list-group-item d-flex justify-content-between fw-bold fs-5 text-reset">
                <span>Total</span>
                <span>{formatPrice.format(getCartTotal())}</span>
              </li>
            </ul>
            <button className="w-100 custom-btn fs-5 mt-2" onClick={() => {onEditCartClick()}}>Editar el carrito</button>
          </div>


          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3 fs-3">Datos para envío</h4>
            <form className="mb-5">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.name}
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.lastname}
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div className="col-12">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="nombre@ejemplo.com"
                    value={data.email}
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div className="col-12">
                  <label className="form-label">Dirección</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.address}
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Región o estado</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.state}
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.city}
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div className="col-md-6">
                  <label className="form-label">País</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.country}
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="phone"
                    className="form-control"
                    value={data.phone}
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

              </div>
            </form>

            <div className="container d-flex justify-content-center">
              <div className="row w-100">

            <PayPalButton invoice={'compra'} totalValue={getCartTotal()} />
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
