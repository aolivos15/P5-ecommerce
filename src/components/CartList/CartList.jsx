import { useContext, useEffect, useState } from "react"
import CartContext from '../../context/CartContext/CartContext';
import './cartList.css'

export const CartList = () => {

  const cartCtx = useContext(CartContext);
  const { cart, addToCart, removeFromCart, clearCart, getCartTotal } = cartCtx;
  const [ total, setTotal ] = useState(0);

  // To display prices in CLP format
  const formatPrice = Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  })

  useEffect(() => {
    setTotal(getCartTotal());
  }, [cart]);

  return (
    <>
      <div className="container d-flex">
        <div className="row w-100">
          <div className="col">
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
                    <tr key={product._id}>
                      <td>
                        <div className="cart-tablecell-container">
                          <img className="cart-img" src={product.image} alt={product.title} />
                          <span className="cart-text">{product.title}</span>
                        </div>
                      </td>
                      <td className="align-middle cart-text">{`${formatPrice.format(product.price)}`}</td>
                      <td className="align-middle">
                        <div className="cart-tablecell-container">
                          <button
                            className="cart-quantity-btn"
                            onClick={() => { removeFromCart(product) }}
                          >
                            <i className="fa-solid fa-minus fs-5"></i>
                          </button>
                          <span className="my-2 mx-3">{product.quantity}</span>
                          <button
                            className="cart-quantity-btn"
                            onClick={() => { addToCart(product) }}
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
          </div>
        </div>
      </div>
      <div className="container">
        {
          cart.length > 0 ? (
            <h3 className="text-center fw-bold mt-3 mb-5">Subtotal: {formatPrice.format(total)}</h3>
          ) : (
            <h3 className="text-center py-5">Tu carrito está vacío :(</h3>
          )
        }
      </div>
    </>
  )
}
