import { useContext, useEffect, useState } from "react"
import CartContext from '../../context/CartContext/CartContext';
import { PayPalButton } from "../PayPal/PayPalButton";
import './cartList.css'

export const CartList = () => {

  const cartCtx = useContext(CartContext);
  const { cart, addToCart, removeFromCart, clearCart, getCartTotal } = cartCtx;
  const [ total, setTotal ] = useState(0);

  useEffect(() => {
    setTotal(getCartTotal());
  }, [cart]);

  return (
    <>
      <div className="container d-flex">
        <div className="row w-100">
          <div className="col">
            <table className="table table-warning table-striped table-hover product-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((product) => (
                    <tr key={product._id}>
                      <td><img className="cart-img me-3" src={product.image} alt={product.title} />{product.title}</td>
                      <td className="align-middle">{`$${product.price}`}</td>
                      <td className="align-middle">
                        <button
                          className="btn btn-info me-3"
                          onClick={() => {removeFromCart(product)}}
                        >-</button>
                        {product.quantity}
                        <button
                          className="btn btn-info ms-3"
                          onClick={() => {addToCart(product)}}
                        >+</button>
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
            <h3 className="fw-bold mt-3 mb-5">Precio total: ${total}</h3>
          ) : (
            <h3 className="text-center py-5">Tu carrito está vacío :( <br></br>{`Total: ${total}`}</h3>
          )
        }
      </div>

      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <PayPalButton invoice={'compra'} totalValue={total} />
          </div>
        </div>
      </div>

    </>
  )
}
