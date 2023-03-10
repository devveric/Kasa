import React from 'react';
import '../style/Details.css';

const Details = ({ locations }) => {
  // Je récupère les propriétés de ma liste de données en utilisant le paramètre.
  const { title, location } = locations;
  return (
    <section className='bloc_details'>
      <div className='bloc_details-title'>
        <h1>{title}</h1>
      </div>
      <div className='bloc_details-description'>
        <h2>{location}</h2>
      </div>
    </section>
  );
};

export default Details;