import { useReducer } from "react"
import { reducer } from "./UserReducer";
import UserContext from "./UserContext";
import { axiosClient } from "../../config/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const UserState = ({ children }) => {

  // Initial global state of user
  const initialState = {
    user: {
      _id: "",
      name: "",
      lastname: "",
      email: "",
      address: "",
      city: "",
      state: "",
      country: "",
      phone: "",
      role: "",
      orders: []
    },
    authStatus: false
  }

  // Manage context state changes
  const [ globalState, dispatch ] = useReducer(reducer, initialState);

  // Alert to show when user enters wrong credentials
  const logInSwal = withReactContent(Swal.mixin({
    customClass: {
      confirmButton: 'btn swal-btn'
    },
    buttonsStyling: false
  }));

  // Function to log a user in
  const logInUser = async (dataForm) => {
    try {
      const response = await axiosClient.post('/login', dataForm);

      dispatch({
        type: 'LOGIN',
        payload: response.data
      });

    } catch (error) {
      logInSwal.fire({
        icon: 'error',
        titleText: "Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo."
      });
      console.error(error);
    }
  }

  // Function to verify if a valid token exists
  const verifyToken = async () => {
    const token = localStorage.getItem('token');

    if(token) {
      axiosClient.defaults.headers.common['authorization'] = token;
    } else {
      delete axiosClient.defaults.headers.common['authorization'];
    }

    // Ask the server for the data of the user
    try {
      const response = await axiosClient.get('/verifytoken');

      dispatch({
        type: 'GET_USER',
        payload: response.data
      });

    } catch (error) {
      console.error(error);
    }
  }

  // Log a user out
  const logOutUser = () => {
    dispatch({
      type: "LOGOUT"
    });
  }


  return (
    <UserContext.Provider
      value={{
        user: globalState.user,
        authStatus: globalState.authStatus,
        logInUser,
        verifyToken,
        logOutUser
      }}
    >{children}
    </UserContext.Provider>
  );
}
