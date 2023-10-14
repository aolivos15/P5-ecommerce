import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext/CartContext';
import logo from '../../assets/img/logo.png';
import './navBar.css';
import UserContext from '../../context/UserContext/UserContext';
import { CatalogNavBar } from '../CatalogNavBar/CatalogNavBar';
import { Outlet } from 'react-router-dom';

export const NavBar = () => {

  const userCtx = useContext(UserContext);
  const { logOutUser, authStatus, user } = userCtx;

  const cartCtx = useContext(CartContext);
  const { cart, getNumberOfItemsInCart } = cartCtx;
  const [ numberOfItems, setNumberOfItems ] = useState(0);

  // Calculate the total price of items on the cart
  useEffect(() => {
    setNumberOfItems(getNumberOfItemsInCart());
  }, [cart]);

  return (
    <>
      <Navbar expand="sm" className="bg-first fs-5">
        <div className="container">
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo de Ovillo Feliz" className='navbar-img' />
            <span className='ms-3 fs-3 nav-title d-none d-md-inline'>Ovillo Feliz</span>
          </Navbar.Brand>
          <Nav className="nav-gap flex-row align-items-center">
            <div className='text-center d-flex gap-4'>
              {
                authStatus
                  ? <>
                    <Nav.Link href=''>
                      <div className='nav-icon-container'>
                        <i className="fa-solid fa-user me-2 d-block nav-icon"></i>
                        <span className='nav-icon'>{user.name}</span>
                      </div>
                    </Nav.Link>
                    <Nav.Link href='/' onClick={() => { logOutUser() }}>
                      <div className='nav-icon-container'>
                        <i className="fa-solid fa-person-walking-arrow-right me-2 d-block nav-icon"></i>
                        <span className='nav-icon'>Salir</span>
                      </div>
                    </Nav.Link>

                  </>
                  : <>
                    <Nav.Link className="text-reset" href="/login">
                      <i className="fa-solid fa-user me-3"></i>
                      <span>Iniciar sesión</span>
                    </Nav.Link>
                  </>
              }
            </div>
            <Nav.Link className="text-reset" href='/carrito/'>
              <i className="fa-solid fa-cart-shopping me-2"></i>
              <span className="badge rounded-pill text-reset nav-cart-badge">{numberOfItems}</span>
            </Nav.Link>

          </Nav>
        </div>
      </Navbar>
      <CatalogNavBar />
      <Outlet />
    </>
  );
}