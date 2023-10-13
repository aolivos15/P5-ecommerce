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
  const addToCart = (product, quantity, variant) => {
    const updatedCart = cart.map((cartItem) => {
      // If current cart item matches product id and variant, increase quantity by requested number
      if (cartItem._id === product._id && cartItem.variant === variant) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + quantity,
          //variant: variant,
        };
      }
      return cartItem; // If not, return item as is
    });

    // Check if there are copies of the requested product variant
    const isProductInCart = updatedCart.find(
      (cartItem) => cartItem._id === product._id && cartItem.variant === variant
    );

    // If there are none, add the requested quantity of the product variant
    if (!isProductInCart) {
      updatedCart.push({
        ...product,
        quantity: quantity,
        variant: variant,
      });
    }

    setCart(updatedCart);
  };


  // Function to remove a product from the cart
  const removeFromCart = (product, variant) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem._id === product._id && cartItem.variant === variant) {
        if (cartItem.quantity > 1) {
          // If there is more than one copy of the product in the cart, decrease quantity by 1
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          // If there is only one copy, remove it from the cart
          return null;
        }
      }
      return cartItem;
    });

    // Filter out null values (products to be removed)
    const filteredCart = updatedCart.filter((cartItem) => cartItem !== null);

    setCart(filteredCart);
  };


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

  // To display prices in CLP format
  const formatPrice = Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  })


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
        getNumberOfItemsInCart,
        formatPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );

}