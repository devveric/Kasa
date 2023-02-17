import React from 'react';
import '../style/Slider.css';

const Slider = ({ props }) => {
  const display = (props) => {
    switch (props) {
      case props.pictures[0]:
        <img src={props.pictures[0]} alt="Interieur 1" />;
        break;
      case props.pictures[1]:
        <img src={props.pictures[1]} alt="Interieur 2" />;
        break;
      case props.pictures[2]:
        <img src={props.pictures[2]} alt="Interieur 3" />;
        break;
      case props.pictures[3]:
        <img src={props.pictures[3]} alt="Interieur 4" />;
        break;
      case props.pictures[4]:
        <img src={props.pictures[4]} alt="Interieur 5" />;
        break;
      default:
        return null;
    }
  };
  return (
    <section className='bloc_carousel'>
      <div className='bloc_carousel-img'>
        {display(props)};
      </div>
      <div className="bloc_digital">
        <h3>1/5</h3>
      </div>
    </section>
  );
};

export default Slider;