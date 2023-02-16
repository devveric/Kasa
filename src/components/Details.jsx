import React from 'react';
import '../style/Details.css';

const Details = ({ data }) => {
  return (
    <section className='bloc_details'>
      <div className='bloc_details-title'>
        <h1>{data.title}</h1>
      </div>
      <div className='bloc_details-description'>
        <h2>{data.location}</h2>
      </div>
    </section>
  );
};

export default Details;