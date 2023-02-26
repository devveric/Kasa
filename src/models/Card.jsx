import React, { Fragment } from 'react';
import { Navigate, useParams } from "react-router-dom";
import { Slider, Details, Host, Tags, Rating } from '../config';
import dataList from "../data/DataList.json";
import '../style/Card.css';

const Card = () => {
  const { id } = useParams();
  const data = dataList.find(data => data.id === id);
  const { pictures, host, tags, rating } = data;

  if (data === undefined) {
    return <Navigate to='*' />;
  }
  return (
    <Fragment>
      <div className="container_card">
        <div className="bloc_card-pictures">
          <Slider pictures={pictures} />
        </div>
        <div className="bloc_card">
          <div className="bloc_details-host">
            <div>
              <Details locations={data} />
            </div>
            <div>
              <Host author={host} />
            </div>
          </div>
          <div className="bloc_tags-rating">
            <div className='bloc_card-tags'>
              {
                tags.map((tag, index) => {
                  return <Tags filters={tag} key={index} />;
                })
              }
            </div>
            <div>
              <Rating string={rating} />
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};

export default Card;