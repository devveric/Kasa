import React, { useState } from 'react';
import arrowLeft from '../assets/img/arrow_left.svg';
import arrowRight from '../assets/img/arrow_right.svg';
import '../style/Slider.css';

const Slider = ({ pictures }) => {
  const [count, setCount] = useState(0);

  const previousPictures = () => {
    if (count === 0) {
      setCount(pictures.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const nextPictures = () => {
    if (count === pictures.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };


  const arrowDisplayLeft = () => {
    if (pictures.length !== 1) {
      return (
        <img onClick={previousPictures} src={arrowLeft} alt="Flèche gauche" />
      );
    }
  };

  const arrowDisplayRight = () => {
    if (pictures.length !== 1) {
      return (
        <img onClick={nextPictures} src={arrowRight} alt="Flèche droite" />
      );
    }
  };

  return (
    <section className='bloc_section-slider'>
      <div className="bloc_carousel">
        <div id='arrowLeft' className="bloc_arrow-left">
          {arrowDisplayLeft()}
        </div>
        <div className="bloc_slider-pictures">
          <img src={pictures[count]} alt="Carousel" />
          <p className="digital">{count + 1}/{pictures.length}</p>
        </div>
        <div className="bloc_arrow-right">
          {arrowDisplayRight()}
        </div>
      </div>
    </section>
  );
};

export default Slider;