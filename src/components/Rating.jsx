import React from 'react';
import { starFull } from '../config';
import '../style/Rating.css';

const Rating = ({ string }) => {
  const array = ` ${starFull}`.repeat(5).split(' ');
  const starsFull = array.splice(array.length - 5);

  return (
    <section className="bloc_rating-img">
      {
        starsFull.map((star, index) => {
          return (
            <img className={index < string ? "" : 'stars_empty'} key={index} src={star.toString()} alt="Étoiles pleines" />
          );
        })
      }
    </section>
  );
};

export default Rating;;