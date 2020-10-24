import React from 'react';
import './../styles/firstPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const FirstPage = () => {
  return(
    <div className="index" id="home">
      <h1 className="center-text">
          <span>Erwan DELORY</span>
          <br />
          <br />
          <span className="subtitle">Élève-ingénieur en informatique à Polytech Marseille</span>
          <br />
          <br />
          <a href="#me"><FontAwesomeIcon className="bckg-icon" icon={faSortDown} /></a>
      </h1>
    </div>
  );
}
export default FirstPage;