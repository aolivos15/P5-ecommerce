import { PayPalButtons } from "@paypal/react-paypal-js"

export const PayPalButton = ({invoice, totalValue}) => {
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
          window.alert('Pago exitoso');
        } catch (error) {
          console.error(`Error al completar el pago: ${error}`);
        }
      }}

    />
  )
}
