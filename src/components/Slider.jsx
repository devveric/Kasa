import React from 'react';
import '../style/Slider.css';

const Slider = ({ data }) => {
  if (data.pictures[0] && data.pictures[1] && data.pictures[2] && data.pictures[3] && data.pictures[4]) {
    return (
      <section className='bloc_carousel'>
        <div className='bloc_carousel-img'>
          <img src={data.pictures[0]} alt="Interieur 1" />
          <img src={data.pictures[1]} alt="Interieur 2" />
          <img src={data.pictures[2]} alt="Interieur 3" />
          <img src={data.pictures[3]} alt="Interieur 4" />
          <img src={data.pictures[4]} alt="Interieur 5" />
        </div>
        <div className="bloc_digital">
          <h3>1/5</h3>
        </div>
      </section>
    );
  }
};

export default Slider;