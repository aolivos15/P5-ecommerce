export const reducer = (globalState, action) => {

  switch(action.type) {

    case "ADD_TO_CART":
      localStorage.setItem('cart', action.payload);
      return {
        ...globalState,
        cart: [...globalState.cart, action.payload]
      };

    default:
      return globalState;
  }
}