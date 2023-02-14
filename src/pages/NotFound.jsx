import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NotFound.css';
import notFound404 from '../assets/img/404.svg';

const NotFound = () => {
  return (
    <div>
      <section className='bloc_notfound-section'>
        <div className='bloc_notfound-img'>
          <img src={notFound404} alt="texte 404" />
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