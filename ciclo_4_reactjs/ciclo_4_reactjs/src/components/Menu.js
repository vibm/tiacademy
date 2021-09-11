import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

export const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen); 
  return (
    <div>
      <Navbar color="info" dark expand="md">
        <Container>
          <NavbarBrand>Services TI Academy</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/visualizarcliente">Clientes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/visualizarservico">Serviços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/visualizarpedido">Pedidos</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}