import React, { Fragment } from 'react';
import { Navigate, useParams } from "react-router-dom";
import { Slider, Details, Host, Tags, Rating, Collapse } from '../config';
import dataList from "../data/DataList.json";
import '../style/Card.css';

const Card = () => {
  // Je récupère le paramètre d'URL.
  const { id } = useParams();
  // Je cherche l'identifiant de ma liste de données identique au paramètre d'URL.
  const data = dataList.find(data => data.id === id);

  // Je vérifie si la recherche d'identifiant est indéfini.
  // Dans ce cas, je dirige l'utilisateur sur la page d'erreur.
  if (data === undefined) {
    return <Navigate to='*' />;
  }

  // Je décompose ma liste de données.
  const { pictures, host, tags, rating, description, equipments } = data;

  return (
    <Fragment>
      <div className="container_card">
        <div className="bloc_card-slider">
          <Slider pictures={pictures} />
        </div>
        <div className="container_card_without-slider">
          <div className='bloc_details-tags'>
            <div className='bloc_card-details'>
              <Details locations={data} />
            </div>
            <div className='bloc_card-tags'>
              {
                tags.map((tag, index) => {
                  return <Tags filters={tag} key={index} />;
                })
              }
            </div>
          </div>
          <div className='bloc_host-rating'>
            <div className='bloc_card-host'>
              <Host author={host} />
            </div>
            <div className='bloc_card-rating'>
              <Rating rates={rating} />
            </div>
          </div>
        </div>
        <div className='container_card-collapse'>
          <div className="bloc_card-collapse">
            <Collapse content={{ name: "Description", description: description }} />
          </div>
          <div className="bloc_card-collapse">
            <Collapse content={{ name: "Équipements", equipments: equipments }} />
          </div>
        </div>
      </div>
    </Fragment >
  );
};

export default Card;