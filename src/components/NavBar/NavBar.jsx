import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navBar.css'
import logo from '../../assets/img/logo.png'

export const NavBar = () => {
    return (
      <Navbar expand="lg" className="bg-first fs-4">
        <div className="container">
          <Navbar.Brand href="/"><img src={logo} alt="Logo de Ovillo Feliz" className='navbar-img' /><span className='m-2 fs-4 nav-title'>Ovillo Feliz</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-gap align-items-center">
              <Nav.Link className="nav-link" href="#">Iniciar sesión</Nav.Link>
              <Nav.Link className="nav-link" href="#">Carrito</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
}