import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './catalogNavBar.css'

export const CatalogNavBar = () => {
  return (
    <Navbar expand="lg" className="cat-nav-bg fs-5">
      <div className="container">
        <Navbar.Brand><span className='m-2 fs-4 cat-nav-title me-5'>Catálogo</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="cat-nav-gap align-items-center">
            <NavDropdown className="nav-link" title="Ovillos">
              <NavDropdown.Item className="nav-link fs-5" href="#">Línea básica</NavDropdown.Item>
              <NavDropdown.Item className="nav-link fs-5" href="#">Línea súper</NavDropdown.Item>
              <NavDropdown.Item className="nav-link fs-5" href="#">Línea bebé</NavDropdown.Item>
              <NavDropdown.Item className="nav-link fs-5" href="#">Línea algodón</NavDropdown.Item>
              <NavDropdown.Item className="nav-link fs-5" href="#">Línea lana</NavDropdown.Item>
              <NavDropdown.Item className="nav-link fs-5" href="#">Línea arcoiris</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="#">Hilos de coser</Nav.Link>
            <Nav.Link className="nav-link" href="#">Accesorios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}