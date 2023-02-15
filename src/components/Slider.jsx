import React from 'react';
import '../style/Slider.css';

const Slider = ({ data }) => {
  return (
    <div>
      <img src={data.cover} alt="carousel" />
    </div>
  );
};

export default Slider;