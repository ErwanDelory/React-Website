import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function PfeProject(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Project avec React - Polystage
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          L'application a été créé pour un projet avec Polytech Marseille.
          Nous étions 2 personnes pour faire ce projet.
          <br />
          L'objectif de l'application est de gérer la plateforme des stages de notre école.
          <br />
          <h4>En cours de réalisation</h4>
          Le projet est actuellement en cours de réalisation
          <br />
          <br />
          Le code de l'application est disponible ici: https://github.com/ErwanDelory/PFE-Polystage
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default PfeProject;