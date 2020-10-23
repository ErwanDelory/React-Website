import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Menu = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Erwan DELORY</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#accueil">Accueil</Nav.Link>
          <Nav.Link href="#moi">Qui suis-je</Nav.Link>
          <Nav.Link href="#competences">Compétences</Nav.Link>
          <Nav.Link href="#projets">Projets</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
export default Menu;
