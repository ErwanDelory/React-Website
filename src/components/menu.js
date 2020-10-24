import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <nav>
      <Navbar bg="light" variant="light" fixed="bottom" className="position-sticky">
        <Navbar.Brand href="#">Erwan DELORY</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"><FontAwesomeIcon icon={faHome} /> Accueil</Nav.Link>
          <Nav.Link href="#me"><FontAwesomeIcon icon={faCoffee} /> Qui suis-je</Nav.Link>
          <Nav.Link href="#skills"><FontAwesomeIcon icon={faCode} /> Compétences</Nav.Link>
          <Nav.Link href="#projects"><FontAwesomeIcon icon={faTasks} /> Projets</Nav.Link>
        </Nav>
      </Navbar>
    </nav>
  );
}
export default Menu;
