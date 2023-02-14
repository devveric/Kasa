import React from 'react';
// import Carroussel from '../components/Carroussel';
import accomodations from '../data/Data';

const Card = () => {
  return (
    <div>
      {
        accomodations.map((data) => (
          <section className='carroussel_bloc'>
            <img src={data.pictures} alt="carroussel" />
          </section>
        ))
      }
    </div>
  );
};

export default Card;