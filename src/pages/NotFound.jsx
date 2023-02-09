import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../css/NotFound.css';

const NotFound = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <section className='bloc_section'>
        <div className='bloc_title-para'>
          <h1>
            404
          </h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div className="bloc_link">
          <NavLink to='/'>
            <p>Retourner sur la page d'accueil</p>
          </NavLink>
        </div>
      </section>
    </div>
  );
};
export default NotFound;