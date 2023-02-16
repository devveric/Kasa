import React from 'react';
import '../style/Rating.css';
import star_full from '../assets/img/star_full.svg';
import star_empty from '../assets/img/star_empty.svg';

const Rating = () => {
  const fullStars = Array(5).fill(<img src={star_full} alt="Étoile rempli" />);
  const emptyStars = Array(5).fill(<img src={star_empty} alt="Étoile vide" />);
  return (
    <section className='bloc_rating'>
      <div className="bloc_rating-full">
        {
          fullStars.map((stars, i) => (
            <div key={i}>
              {stars}
            </div>
          ))
        }
      </div>
      <div className="bloc_rating-empty">
        {
          emptyStars.map((stars, i) => (
            <div key={i}>
              {stars}
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Rating;