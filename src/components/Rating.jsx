import React from 'react';
import { starEmpty } from '../config';
import '../style/Rating.css';

const Rating = ({ string }) => {
  const number = parseInt(string);
  const array = ` ${starEmpty}`.repeat(number).split(' ');
  const stars = array.splice(array.length - 5);

  const starActive = () => {
  };

  return (
    <section className="bloc_rating-img">
      {
        stars.map((star, index) => {
          return (
            <img onClick={starActive} key={index} src={star.toString()} alt="Étoile vide" />
          );
        })
      }
    </section>
  );
};

export default Rating;