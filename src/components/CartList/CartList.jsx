import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CartContext from '../../context/CartContext/CartContext';
import './cartList.css'

export const CartList = () => {

  const navigate = useNavigate();

  const cartCtx = useContext(CartContext);
  const { cart, addToCart, removeFromCart, clearCart, getCartTotal, formatPrice } = cartCtx;
  const [ total, setTotal ] = useState(0);

  useEffect(() => {
    setTotal(getCartTotal());
  }, [cart]);

  return (
    <>
      <div className="container">
        <h1 className="resp-title text-center my-5 fs-1 fw-bold">Carrito de compras</h1>

        <div className="container d-flex">
          <div className="row w-100">
            <div className="col">
              {cart.length > 0 ? (
                <table className="table table-warning table-striped table-hover fs-5">
                  <thead>
                    <tr className="cart-text">
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map((product) => (
                        <tr key={product._id.concat(product.variant)}>
                          <td>
                            <div className="cart-tablecell-container">
                              <img className="cart-img" src={product.image} alt={product.title} />
                              <span className="cart-text">{product.title} {product.variant ? `- ${product.variant}` : ''}</span>
                            </div>
                          </td>
                          <td className="align-middle cart-text">{formatPrice.format(product.price)}</td>
                          <td className="align-middle">
                            <div className="cart-tablecell-container">
                              <button
                                className="cart-quantity-btn"
                                onClick={() => { removeFromCart(product, product.variant) }}
                              >
                                <i className="fa-solid fa-minus fs-5"></i>
                              </button>
                              <span className="my-2 mx-3">{product.quantity}</span>
                              <button
                                className="cart-quantity-btn"
                                onClick={() => { addToCart(product, 1, product.variant) }}
                              >
                                <i className="fa-solid fa-plus fs-5"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              ) : ''}
            </div>
          </div>
        </div>

        {
          cart.length > 0 ? (
            // If there are items in the cart
            <div className="container">
              <h3 className="text-center fw-bold mt-3 mb-5">Subtotal: {formatPrice.format(total)}</h3>
              <div className="d-flex justify-content-center my-5">
                <button className="custom-btn fs-4 mb-5" onClick={() => { navigate('/checkout') }}>Continuar con la compra<i className="fa-solid fa-circle-right ms-3"></i></button>
              </div>
            </div>
          ) : (
            // If the cart is empty
            <div className="container">
              <h3 className="text-center py-5">Tu carrito está vacío :(</h3>
              <div className="d-flex justify-content-center my-5">
                <button className="custom-btn fs-4 mb-5" onClick={() => { navigate('/') }}><i className="fa-solid fa-circle-left me-2"></i>Volver al inicio</button>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}
