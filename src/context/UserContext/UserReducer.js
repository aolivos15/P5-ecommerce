export const reducer = (globalState, action) => {

  switch (action.type) {

    case "LOGIN":
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      console.log(action.payload.user);
      return {
        ...globalState,
        authStatus: true
      }

    case "GET_USER":
      return {
        ...globalState,
        authStatus: true,
        user: action.payload
      }

    case "LOGOUT":
      localStorage.removeItem('token');
      localStorage.removeItem('cart');
      localStorage.removeItem('user');
      return {
        user: '',
        authStatus: false
      }

    default:
      return globalState;

  }
}