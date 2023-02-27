// Menu ouverture fermeture (description, etc.)
import React, { useState } from 'react';
import { arrowCollapse } from '../config';
import '../style/Collapse.css';

const Collapse = ({ content }) => {
  const [open, setOPen] = useState(false);
  const { name, description } = content;

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <div onClick={toggle()} className="bloc_about-reliability">
        <p>{name}</p>
        <img id='arrow' src={arrowCollapse} alt="Flèche" />
      </div>
      {open && <div className="bloc_collapse-description">
        <p>{description}</p>
      </div>}
    </div>
  );
};

export default Collapse;