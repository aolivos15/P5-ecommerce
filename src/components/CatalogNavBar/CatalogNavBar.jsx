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
            <Nav.Link className="nav-link" href="/categoria/ovillos">Ovillos</Nav.Link>
            <Nav.Link className="nav-link" href="/categoria/hilos">Hilos de coser</Nav.Link>
            <Nav.Link className="nav-link" href="/categoria/accesorios">Accesorios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}