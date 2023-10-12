import { useEffect, useState } from "react"
import CartContext from "./CartContext";

export const CartState = ({ children }) => {

  const [ cart, setCart ] = useState(
    // If there are products in the cart from the browser, set them as the initial state of the cart. If not, set the initial state as an empty array.
    localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []
    );

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if a copy of the product is already in the cart
    const isProductInCart = cart.find((cartItem) => cartItem._id === product._id);

    if (isProductInCart) {
      setCart(
        cart.map((cartItem) =>
          // If the product is in the cart, increase quantity by 1
          cartItem._id === product._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem // If product is not in the cart, return the current cart item
        )
      );
    } else { // If the product is not in the cart, add it to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }


  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = cart.find((cartItem) => cartItem._id == product._id);

    if (isProductInCart.quantity == 1) {
      // If there is one copy of the product in the cart, remove it from the cart
      setCart(cart.filter((cartItem) => cartItem._id !== product._id));
    } else {
      // If there is more than one copy of the product in the cart, decrease quantity by 1
      setCart(
        cart.map((cartItem) =>
          cartItem._id == product._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  }


  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  }


  // Function to get the total price of products in the cart
  const getCartTotal = () => {
    const total = cart.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);
    return total;
  }

  // Function to get the total number of items in the cart
  const getNumberOfItemsInCart = () => {
    const total = cart.reduce((total, currentItem) => total + currentItem.quantity, 0);
    return total;
  }


  // Store cart in local storage every time its contents change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  // Get cart items from the browser
  useEffect(() => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  }, []);


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getNumberOfItemsInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );

}