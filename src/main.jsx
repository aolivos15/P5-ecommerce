import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx'
import { UserState } from './context/UserContext/UserState.jsx';
import { CartState } from './context/CartContext/CartState.jsx';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PayPalScriptProvider
    options={{
      "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID
    }}
  >
    <UserState>
      <CartState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartState>
    </UserState>
  </PayPalScriptProvider>
)
