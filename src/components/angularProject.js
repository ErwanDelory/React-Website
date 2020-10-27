import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function AngularProject(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Project avec Angular - La Bonne Occase
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          L'application a été créé pour un projet avec Polytech Marseille.
          Nous étions 3 personnes pour faire ce projet.
          <br />
          L'objectif de l'application était de déterminer la meilleure période pour
          acheter un smartphone.
          <br />
          <h4>Scrapping</h4>
          Pour ce faire, nous avons utiliser une méthode de Scrapping afin de récupérer
          les informations des smartphones dans un fichier json, que l'on pouvait ensuite formater
          pour ensuite le mettre dans notre base de données en SQL.
          <br />
          <h4>Backend</h4>
          Le backend de l'application a été réalisé avec NodeJS avec le framework Express qui permet
          la création d'une application web.
          <br />
          <h4>Frontend</h4>
          Le frontend de l'application a été réalisé avec Angular et TypeScript. Pour le design nous avons
          fait le choix d'utiliser Bootstrap qui permet de rendre facilement une application responsive pour
          toutes les tailles d'écrans.
          <br />
          <h4>Objectif de l'application</h4>
          Dans l'application, il y a un système de login, une page admin qui permet de lancer le scrapping 
          d'une page, de faire le choix des modèles de téléphone a ajouter, et de confirmer l'ajout dans
          la base de données. Enfin, sur la page principal de l'application, on retrouve des inputs permettant
          de choisir la marque du smartphone ainsi que son nom. Une fois ceci réalisé, l'application affiche
          un graphique de l'évolution du prix et également un tableau des caractéristiques du smartphone
          que l'on récupère avec une API.
          <br />
          <br />
          Le code de l'application est disponible ici: https://gitlab.com/feltinbenjamin/bonne-occase
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AngularProject;