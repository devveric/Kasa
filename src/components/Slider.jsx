import React, { useState } from 'react';
import arrowLeft from '../assets/img/arrow_left.webp';
import arrowRight from '../assets/img/arrow_right.webp';
import '../style/Slider.css';

const Slider = ({ pictures }) => {
  /**
   * "useState" est un hook qui permet d'ajouter l'état local à des fonctions composants.
   * Ce hook renvoie un tableau avec deux valeurs.
   * Déclaration d'une nouvelle variable d'état que j'appel "count".
   * Déclaration de la variable qui met à jour la variable d'état en remplaçant sa valeur, que j'appel "setCount".
   * Comportement de "useState" mis à 0 par défaut.
  */
  const [count, setCount] = useState(0);

  /**
   * Fonction qui vérifie si le compteur d'image est à 0 (à la première image du tableau).
   * Je récupère la longueur du tableau d'images pour afficher la dernière image du tableau.
   * Sinon je récupère l'image précédente du tableau.
  */
  const previousPictures = () => {
    if (count === 0) {
      setCount(pictures.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  /**
   * Fonction qui vérifie si le compteur d'image est à la dernière image du tableau.
   * Je met à jour la variable d'état à 0 pour afficher la première image du tableau.
   * Sinon je récupère l'image suivante du tableau.
  */
  const nextPictures = () => {
    if (count === pictures.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  /**
   * Je créé 2 fonctions vérifiant si la longueur du tableau d'images est contraire à 1 image.
   * Dans ce cas, j'affiche les flèches pour pouvoir changer les images.
  */
  const arrowDisplayLeft = () => {
    if (pictures.length !== 1) {
      return (
        <img className='slider_arrow-left' onClick={previousPictures} src={arrowLeft} alt="Flèche gauche" />
      );
    }
  };

  const arrowDisplayRight = () => {
    if (pictures.length !== 1) {
      return (
        <img className='slider_arrow-right' onClick={nextPictures} src={arrowRight} alt="Flèche droite" />
      );
    }
  };

  return (
    <section className='bloc_section-slider'>
      <div className="bloc_carousel">
        <div className="bloc_arrow-left">
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