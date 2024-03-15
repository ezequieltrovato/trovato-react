import CartWidget from "../cartwidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/arbol.png"
import {NavLink} from 'react-router-dom';

function NavBarBoostrap() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img src={logo} style={{width:'8rem'}} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="categories/Formularios">Formularios</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="categories/palmeras" >Palmeras</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="categories/arboles">Arboles</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="categories/frutales">Frutales</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="categories/coniferas">Coniferas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget counter={4}/>
    </Navbar>
  );
}

export default NavBarBoostrap;
