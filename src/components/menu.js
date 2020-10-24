import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../styles/menu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <nav>
      <Navbar id="navbar" bg="light" variant="light" sticky="top" className="fixed-top" expand="lg">
        <Navbar.Brand href="#">Erwan DELORY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><FontAwesomeIcon icon={faHome} /> Accueil</Nav.Link>
            <Nav.Link href="#me"><FontAwesomeIcon icon={faCoffee} /> Qui suis-je</Nav.Link>
            <Nav.Link href="#skills"><FontAwesomeIcon icon={faCode} /> Compétences</Nav.Link>
            <Nav.Link href="#projects"><FontAwesomeIcon icon={faTasks} /> Projets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
export default Menu;
