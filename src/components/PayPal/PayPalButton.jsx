import { PayPalButtons } from "@paypal/react-paypal-js"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const PayPalButton = ({invoice, totalValue}) => {

  const navigate = useNavigate();
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
          payPalSwal.fire({
            icon: 'success',
            titleText: 'Pago exitoso'
            // titleText: `${response.data.message}`
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/');
            }
          });
          console.log(order);

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
