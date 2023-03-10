import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoHeader } from '../config';
import '../style/Header.css';

const Navigation = () => {
  return (
    <header>
      <nav className="bloc_navigation-nav">
        <div className="bloc_navigation-img">
          <img src={logoHeader} alt="logo kasa" />
        </div>
        <ul className="bloc_navigation-links">
          <NavLink to='/' className={({ isActive }) =>
            isActive ? "nav-active nav-link" : "nav-link"
          }>
            <li>Accueil</li>
          </NavLink>
          <NavLink to='/about' className={({ isActive }) =>
            isActive ? "nav-active nav-link" : "nav-link"
          }>
            <li>À propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;