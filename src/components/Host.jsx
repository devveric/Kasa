import React from 'react';
import '../style/Host.css';

const Host = ({ author }) => {
  const { name, picture } = author;
  return (
    <section className='bloc_host'>
      <div className='bloc_host-title'>
        <h1>{name}</h1>
      </div>
      <div className="bloc_host-img">
        <img src={picture} alt={name} />
      </div>
    </section>
  );
};

export default Host;