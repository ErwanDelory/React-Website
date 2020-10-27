import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import './../styles/skills.css';
import { Container } from 'react-bootstrap';
import { PrismCode } from '../components/prismCode';

const html = `
<div id="About-me">
  <h3>DELORY</h3>
  <p>Erwan</p>
</div>`;

const css = `
* {
  padding: 0;
  margin: 0;
}`;

const js = `
function direBonjour() {
  alert('Bonjour !');
}`;

const sql = `
SELECT * FROM Competences
WHERE userID = 1;`;

const jsx = `
function App() {
  return(
    <WebSite />
  );
}`;

const Skills = () => {
  return(
    <div id="skills">
      <h2 className="skills-title"><FontAwesomeIcon icon={faCode} /> Mes compétences</h2>
      <Container>
        <p><FontAwesomeIcon icon={faHtml5}/> HTML5</p>
        <PrismCode 
          code = {html}
          language = "html"
          plugins = {["line-numbers"]}
        />
        <p><FontAwesomeIcon icon={faCss3}/> CSS3</p>
        <PrismCode 
          code = {css}
          language = "css"
          plugins = {["line-numbers"]}
        />
        <p><FontAwesomeIcon icon={faJsSquare}/> JavaScript</p>
        <PrismCode 
          code = {js}
          language = "js"
          plugins = {["line-numbers"]}
        />
        <p><FontAwesomeIcon icon={faDatabase}/> SQL</p>
        <PrismCode 
          code = {sql}
          language = "js"
          plugins = {["line-numbers"]}
        />
        <p><FontAwesomeIcon icon={faReact}/> React</p>
        <PrismCode 
          code = {jsx}
          language = "js"
          plugins = {["line-numbers"]}
        />
        <p>Je possède des compétences en déveleppement web avec les langages suivants: HTML, CSS, JavaScript, TypeScript, SQL, NodeJs, JSON, PHP.</p>
        <p>J'ai également des compétences sur les différents frameworks JavaScript comme React, Angular et VueJS.</p>
        <p>Hormis le développement web, j'ai des compétences en C/C++, Java, Git, Docker.</p>
      </Container>

    </div>
    
  );
}
export default Skills;