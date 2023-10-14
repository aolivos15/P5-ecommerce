import { PayPalButtons } from "@paypal/react-paypal-js"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CartContext from "../../context/CartContext/CartContext";
import { axiosClient } from "../../config/api";
import UserContext from "../../context/UserContext/UserContext";

export const PayPalButton = ({ invoice, totalValue, formData }) => {

  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { user } = userCtx;
  const cartCtx = useContext(CartContext);
  const { clearCart } = cartCtx;

  // Alert
  const payPalSwal = withReactContent(Swal.mixin({
    customClass: {
      confirmButton: 'btn swal-btn'
    },
    buttonsStyling: false
  }));

  return (
    <PayPalButtons
      createOrder = {(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: invoice,
              amount: {
                value: totalValue
              }
            }
          ]
        });
      }}

      onApprove = { async (data, actions) => {
        // This function is waiting for an order to arrive
        const order = await actions.order?.capture();
        try {
          console.log(order);
          // Check if the user exists, preguntar al server

          // If user exists, update
          // Use id from form and not from context, in case the user exists but is not logged in
          // const response = await axiosClient.put(`/users/${formData._id}`);

          // If user does not exist, create an order on a guestUsers collection??

          navigate('/order_confirmed');

        } catch (error) {
          payPalSwal.fire({
            icon: 'error',
            titleText: `${error.response.data.message}`
          });
          console.error(`Error al completar el pago: ${error}`);
        }
      }}

    />
  )
}
