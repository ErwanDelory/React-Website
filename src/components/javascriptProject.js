import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function JavascriptProject(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Project avec JavaScript - Snake
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Le jeu a été créé en suivant un cours sur la plateforme Udemy.
          <br />
          L'objectif était de m'améliorer en JavaScript avec l'aide de la création d'un petit jeu.
          <br />
          <h4>Apprentissage</h4>
          Ce cours m'a permis d'en apprendre un peu plus sur le fonctionnement de JavaScript et 
          également de voir la très longue liste de choses que l'on peut faire avec ce langage.
          <br />
          <br />
          Le code de l'application est disponible ici: https://github.com/ErwanDelory/JavaScript-Snake
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default JavascriptProject;