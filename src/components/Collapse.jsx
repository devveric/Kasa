// Menu ouverture fermeture (description, etc.)
import React, { useState } from 'react';
import { arrowCollapse } from '../config';
import '../style/Collapse.css';

const Collapse = () => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <div onClick={toggle()} className="bloc_about-reliability">
        <p></p>
        <img id='arrow' src={arrowCollapse} alt="Flèche" />
      </div>
      {open && <div className="bloc_collapse-description">
        <p></p>
      </div>}
    </div>
  );
};

export default Collapse;