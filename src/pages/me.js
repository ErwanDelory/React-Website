import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './../styles/me.css'

const Me = () => {
  return(
    <div id="me">
      <Container>
        <h2 className="me-title"><FontAwesomeIcon icon={faCoffee} /> Qui suis-je ?</h2>
        <p>Je m'appelle Erwan Delory, j'ai 23 ans, et je suis actuellement en dernière année de cycle ingénieur en informatique à Polytech Marseille.</p>
        <p>Je prépare actuellement un diplôme d'ingénieur que je vais obtenir en 2021.</p>
        <p>Je suis passionné de développement et d'informatique. Je suis donc à la recherche d'un stage en développement d'application web afin de continuer dans ce domaine.</p>
        <p>Durant mes études, j'ai beaucoup voyagé. Après avoir obtenu mon baccalauréat au Lycée Paul Duez de Cambrai, je suis parti à Polytech Lille en partenariat avec l'IUT A de Lille afin de préparer un DUT afin d'intégrer le cycle ingénieur.
          À la fin de celui-ci, je suis allé à Polytech Marseille pour préparer un diplôme d'ingénieur en informatique. Durant ce cursus, j'ai eu la chance de pouvoir partir faire un semestre à l'UQAC - Université du Québec à Chicoutimi, Canada.
        </p>
      </Container>
    </div>
  );
}

export default Me;