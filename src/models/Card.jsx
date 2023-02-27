import React, { Fragment } from 'react';
import { Navigate, useParams } from "react-router-dom";
import { Slider, Details, Host, Tags, Rating, Collapse } from '../config';
import dataList from "../data/DataList.json";
import '../style/Card.css';

const Card = () => {
  const { id } = useParams();
  const data = dataList.find(data => data.id === id);
  const { pictures, host, tags, rating, description } = data;

  if (data === undefined) {
    return <Navigate to='*' />;
  }
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
              <Rating string={rating} />
            </div>
          </div>
          <div className="bloc_collapse">
            <Collapse content={{ name: "Description", description: description }} />
          </div>
        </div>
      </div>
    </Fragment >
  );
};

export default Card;