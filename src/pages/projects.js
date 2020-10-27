import React, { useState } from 'react';
import './../styles/projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Container } from 'react-bootstrap';
import imgReact from './../images/react-project.jpg';
import imgAngular from './../images/angular-project.jpg';
import imgJs from './../images/js-project.jpg';
import imgPfe from './../images/pfe-project.jpg';
import AngularProject from '../components/angularProject';
import ReactProject from '../components/reactProject';
import JavascriptProject from '../components/javascriptProject';
import PfeProject from '../components/pfeProject';

const Projects = () => {
    const [index, setIndex] = useState(0);
    const [modalShowAngular, setModalShowAngular] = React.useState(false);
    const [modalShowReact, setModalShowReact] = React.useState(false);
    const [modalShowJavascript, setModalShowJavascript] = React.useState(false);
    const [modalShowReactPFE, setModalShowReactPFE] = React.useState(false);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return(
    <div id="projects">
      <h2 className="projects-title"><FontAwesomeIcon icon={faTasks} /> Mes projets</h2>
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item onClick={() => setModalShowReactPFE(true)}>
            <img
              className="d-block w-100"
              src={imgPfe}
              alt="eefef slide"
            />
            <Carousel.Caption className="bckg-carousel">
              <h3>Projet avec React - PolyStage</h3>
              <p>Réalisation de mon projet de fin d'études</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item onClick={() => setModalShowReact(true)}>
            <img
              className="d-block w-100"
              src={imgReact}
              alt="eefef slide"
            />
            <Carousel.Caption className="bckg-carousel">
              <h3>Projet avec React - Pokédex</h3>
              <p>Création d'une application en suivant un cours sur Udemy.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item onClick={() => setModalShowAngular(true)}>
            <img
              className="d-block w-100"
              src={imgAngular}
              alt="Second slide"
            />
            <Carousel.Caption className="bckg-carousel">
              <h3>Projet avec Angular - La Bonne Occase</h3>
              <p>Création d'une application du comparaison de prix avec Angular et NodeJs.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item onClick={() => setModalShowJavascript(true)}>
            <img
              className="d-block w-100"
              src={imgJs}
              alt="Third slide"
            />

            <Carousel.Caption className="bckg-carousel">
              <h3>Projet avec JavaScript - Snake</h3>
              <p>Création d'un jeu Snake en JavaScript.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <PfeProject
          show={modalShowReactPFE}
          onHide={() => setModalShowReactPFE(false)}
        />

        <AngularProject 
          show={modalShowAngular}
          onHide={() => setModalShowAngular(false)}
        />

        <ReactProject
          show={modalShowReact}
          onHide={() => setModalShowReact(false)}
        />

        <JavascriptProject 
          show={modalShowJavascript}
          onHide={() => setModalShowJavascript(false)}
        />

        <p>J'ai réalisé ces projets durant mon temps libre, mais aussi durant mes études à Polytech Marseille.</p>
      </Container>
      
    </div>
  );
}
export default Projects;