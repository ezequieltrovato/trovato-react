import CartWidget from "../cartwidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/arbol.png"
import { NavLink } from 'react-router-dom';

function NavBarBoostrap() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img src={logo} style={{width:'7rem'}} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/form'>Formularios</Nav.Link>
            <NavDropdown title='Categorias' id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='category/palmeras' >Palmeras</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='category/arboles'>Arboles</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='category/frutales'>Frutales</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='category/coniferas'>Coniferas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink to='/cart' style={{textDecoration:'none'}}>
            <CartWidget counter={10}/>
          </NavLink>
      </Navbar.Collapse>
      </Container>
      </Navbar>
  );
}

export default NavBarBoostrap;
