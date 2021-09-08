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

  const toggle = () => setIsOpen(!isOpen); //se diminuir a tela ele encolhe o menu em um botão com 3 riscos
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
                <NavLink href="/Cliente/">Cliente</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Pedido/">Pedido</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Servico/">Serviço</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}