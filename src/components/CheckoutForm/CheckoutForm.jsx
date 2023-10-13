import { useContext, useState } from "react"
import CartContext from "../../context/CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import { PayPalButton } from "../PayPal/PayPalButton";

export const CheckoutForm = () => {

  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const { cart, formatPrice, getNumberOfItemsInCart, getCartTotal } = cartCtx;

  const [ name, setName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ address2, setAddress2 ] = useState('');
  const [ region, setRegion ] = useState('');
  const [ city, setCity ] = useState('');


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
                  <li key={product._id} className="list-group-item d-flex justify-content-between">
                    <div>
                      <h6 className="fs-5 mb-0">{product.title}</h6>
                      <small>Variante</small>
                    </div>
                    <span>{formatPrice.format(product.price)}</span>
                  </li>
                ))
              }

              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className="fs-5 mb-0">Costo de envío</h6>
                </div>
                <span>$3.990</span>
              </li>

              <li className="list-group-item d-flex justify-content-between fw-bold fs-5">
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required />
                </div>

                <div className="col-12">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="nombre@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>

                <div className="col-12">
                  <label className="form-label">Dirección</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Calle y número"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required />
                </div>

                <div className="col-12">
                  <label className="form-label">Dirección 2 <span className="text-muted">(Opcional)</span></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="N° departamento, bloque, etc."
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Región</label>
                  <input
                    type="text"
                    className="form-control"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    required />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
