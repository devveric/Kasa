// Menu ouverture fermeture (description, etc.)
import React, { useState } from 'react';
import { arrowCollapse } from '../config';
import '../style/Collapse.css';

const Collapse = ({ content }) => {
  /**
   * "useState" est un hook qui permet d'ajouter l'état local à des fonctions composants.
   * Ce hook renvoie un tableau avec deux valeurs.
   * Déclaration d'une nouvelle variable d'état que j'appel "open".
   * Déclaration de la variable qui met à jour la variable d'état en remplaçant sa valeur, que j'appel "setOpen".
   * Comportement de "useState" mis à "false" par défaut.
  */
  const [open, setOPen] = useState(false);
  // Je récupère les propriétés de ma liste de données en utilisant le paramètre.
  const { name, description, equipments, conditions } = content;

  // Fonction qui permet de fermer le collapse.
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <>
      <div onClick={toggle} className="bloc_collapse-reliability">
        <p>{name}</p>
        <img className={open ? 'arrow_collapse-open' : 'arrow_collapse-close'} src={arrowCollapse} alt="Flèche" />
      </div>
      {
        !conditions ?
          open && <div className="bloc_collapse-description">
            {
              equipments ?
                equipments.map((equipment, index) => {
                  return <p key={index}>{equipment}</p>;
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