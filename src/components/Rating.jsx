import React from 'react';
import { starFull } from '../config';
import '../style/Rating.css';

const Rating = ({ rates }) => {
  // Je répète 5 fois l'étoile, puis transforme en tableau.
  const array = ` ${starFull}`.repeat(5).split(' ');
  // Étant en string, je retire le 5ème index pour supprimer les guillemets.
  const starsFull = array.splice(array.length - 5);

  return (
    <section className="bloc_rating-img">
      {
        starsFull.map((star, index) => {
          return (
            <img className={index < rates ? '' : 'stars_empty'} key={index} src={star.toString()} alt="Étoiles" />
          );
        })
      }
    </section>
  );
};

export default Rating;;