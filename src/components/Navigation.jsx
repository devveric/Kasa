import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.svg';
import '../css/Navigation.css';

const Navigation = () => {
  return (
    <header>
      <nav className="bloc_nav-img">
        <div className="bloc_img">
          <img src={logo} alt="logo kasa" />
        </div>
        <ul className="bloc_links">
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