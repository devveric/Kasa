import React from 'react';
import { NavLink } from 'react-router-dom';
import { error404 } from '../config';
import '../style/NotFound.css';

const NotFound = () => {
  return (
    <div>
      <section className='bloc_notfound-section'>
        <div className='bloc_notfound-img'>
          <img src={error404} alt="texte 404" />
        </div>
        <div className='bloc_notfound-para'>
          <p>Oups! La page que <span>vous demandez n'existe pas.</span></p>
        </div>
        <div className="bloc_notfound-link">
          <NavLink to='/'>
            <p>Retourner sur la page d'accueil</p>
          </NavLink>
        </div>
      </section>
    </div>
  );
};
export default NotFound;