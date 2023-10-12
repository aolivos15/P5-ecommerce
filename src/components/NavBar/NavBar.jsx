import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navBar.css'
import logo from '../../assets/img/logo.png'
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext/CartContext';

export const NavBar = () => {

  const cartCtx = useContext(CartContext);
  const { cart, getNumberOfItemsInCart } = cartCtx;
  const [ numberOfItems, setNumberOfItems ] = useState(0);

  // Calculate the total price of items on the cart
  useEffect(() => {
    setNumberOfItems(getNumberOfItemsInCart());
  }, [cart]);

    return (
      <Navbar expand="lg" className="bg-first fs-5">
        <div className="container">
          <Navbar.Brand href="/"><img src={logo} alt="Logo de Ovillo Feliz" className='navbar-img' /><span className='m-3 fs-3 nav-title'>Ovillo Feliz</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-gap align-items-center">
              <Nav.Link className="nav-link" href="#">Iniciar sesión</Nav.Link>
              <Nav.Link className="nav-link" href='/carrito/'><i className="fa-solid fa-cart-shopping me-3"></i>{`(${numberOfItems})`}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
}