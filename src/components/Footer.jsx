import React from 'react';
import { logoFooter } from '../config';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className='bloc_footer'>
      <div className="bloc_footer-img">
        <img src={logoFooter} alt="logo kasa" />
      </div>
      <div className="bloc_footer-para">
        <p>© 2023 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;