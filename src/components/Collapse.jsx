// Menu ouverture fermeture (description, etc.)
import React, { useState } from 'react';
import '../style/Collapse.css';
import arrow from '../assets/img/arrow.svg';

const Collapse = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <div onClick={toggle()} className="bloc_about-reliability">
        <p>{props.names}</p>
        <img id='arrow' src={arrow} alt="Flèche" />
      </div>
      {open && <div className="bloc_collapse-description">
        <p>{props.conditions}</p>
      </div>}
    </div>
  );
};

export default Collapse;