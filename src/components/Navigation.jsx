import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo_header.svg';
import '../css/Navigation.css';

const Navigation = () => {
  return (
    <header>
      <nav className="bloc_navigation-nav">
        <div className="bloc_navigation-img">
          <img src={logo} alt="logo kasa" />
        </div>
        <ul className="bloc_navigation-links">
          <NavLink to='/'>
            <li>Accueil</li>
          </NavLink>
          <NavLink to='/about'>
            <li>À propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;