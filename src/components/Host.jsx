import React from 'react';
import '../style/Host.css';

const Host = ({ props }) => {
  return (
    <section className='bloc_host'>
      <div className='bloc_host-title'>
        <h1>{props.host.name}</h1>
      </div>
      <div className="bloc_host-img">
        <img src={props.host.picture} alt="Hôte" />
      </div>
    </section>
  );
};

export default Host;