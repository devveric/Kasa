import React from 'react';
import '../css/Footer.css';
import Logo from '../img/logo_footer.svg';

const Footer = () => {
  return (
    <footer className='bloc_footer'>
      <div className="bloc_footer-img">
        <img src={Logo} alt="logo kasa" />
      </div>
      <div className="bloc_footer-para">
        <p>© 2023 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;