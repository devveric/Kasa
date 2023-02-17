import React from 'react';
import '../style/Details.css';

const Details = ({ props }) => {
  return (
    <section className='bloc_details'>
      <div className='bloc_details-title'>
        <h1>{props.title}</h1>
      </div>
      <div className='bloc_details-description'>
        <h2>{props.location}</h2>
      </div>
    </section>
  );
};

export default Details;