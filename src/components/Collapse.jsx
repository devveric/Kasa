// Menu ouverture fermeture (description, etc.)
import React, { useState } from 'react';
import { arrowCollapse } from '../config';
import '../style/Collapse.css';

const Collapse = ({ content }) => {
  const [open, setOPen] = useState(false);
  const { name, description, equipments, conditions } = content;

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <>
      <div className="bloc_collapse-reliability">
        <p>{name}</p>
        <img onClick={toggle} className={open ? 'arrow_collapse-open' : 'arrow_collapse-close'} src={arrowCollapse} alt="Flèche" />
      </div>
      {
        !conditions ?
          open && <div className="bloc_collapse-description">
            {
              equipments ?
                equipments.map(equipment => {
                  return <p >{equipment}</p>;
                })
                : <p>{description}</p>
            }
          </div>
          :
          open && <div className="bloc_collapse-description">
            <p>{conditions}</p>
          </div>
      }
    </>
  );
};

export default Collapse;