import React from 'react';
import './../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return(
    <footer>
        <a href="https://www.linkedin.com/in/erwan-delory/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="linkedin-icon" icon={faLinkedinIn} /></a>
        <a href="https://github.com/ErwanDelory" target="_blank" rel="noreferrer"><FontAwesomeIcon className="github-icon" icon={faGithub} /></a>
      <p>Copyright © 2020 - DELORY Erwan</p>
    </footer>
  );
}
export default Footer;