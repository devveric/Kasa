import React from 'react';
import '../style/Slider.css';

const Slider = ({ data }) => {
  return (
    <div className='bloc_carousel'>
      <section className='bloc_carousel-img'>
        <img src={data.pictures[0]} alt="carousel salon face canapé" />
        <img src={data.pictures[1]} alt="carousel couloir d'entrée" />
        <img src={data.pictures[2]} alt="carousel cuisine" />
        <img src={data.pictures[3]} alt="carousel étagères" />
        <img src={data.pictures[4]} alt="carousel salon côté canapé" />
        <div className="bloc_digital">
          <h3>1/5</h3>
        </div>
      </section>
    </div>
  );
};

export default Slider;