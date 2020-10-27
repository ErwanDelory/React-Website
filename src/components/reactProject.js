import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function ReactProject(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Project avec React - Pokédex
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          L'application a été créé en suivant un cours sur la plateforme Udemy.
          <br />
          L'objectif était de faire une première découverte de React avec la création d'une 
          première application.
          <br />
          <h4>Apprentissage</h4>
          Ce cours m'a permis une première découverte du framework React, mais également d'apprendre
          l'utilisation des Hooks, des Routes, la gestion du login, mais aussi le déploiement d'une 
          application sur un serveur.
          <br />
          <br />
          Le code de l'application est disponible ici: https://github.com/ErwanDelory/React-Pokemon
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ReactProject;