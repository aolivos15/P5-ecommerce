export const reducer = (globalState, action) => {

  switch(action.type) {

    case "LOGIN":
      localStorage.setItem('token', action.payload.token);
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
        return {
          user: '',
          authStatus: false
        }

      default:
        return globalState;

  }
}