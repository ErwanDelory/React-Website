import React, { useState } from 'react';
import './../styles/projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Container } from 'react-bootstrap';
import imgReact from './../images/react-project.jpg';
import imgAngular from './../images/angular-project.jpg';
import imgJs from './../images/js-project.jpg';

const Projects = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return(
    <div id="projects">
      <h2 className="projects-title"><FontAwesomeIcon icon={faTasks} /> Mes projets</h2>
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgReact}
              alt="eefef slide"
            />
            <Carousel.Caption className="bckg-carousel">
              <h3>Projet en React</h3>
              <p>Création d'une application en suivant un cours sur Udemy.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgAngular}
              alt="Second slide"
            />
            <Carousel.Caption className="bckg-carousel">
              <h3>Projet en Angular</h3>
              <p>Création d'une application du comparaison de prix durant un projet avec Polytech Marseille avec Angular et NodeJs.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgJs}
              alt="Third slide"
            />

            <Carousel.Caption className="bckg-carousel">
              <h3>Projet en JavaScript</h3>
              <p>Création d'un jeu Snake en JavaScript.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      
    </div>
  );
}
export default Projects;