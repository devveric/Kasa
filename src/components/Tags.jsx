import React from 'react';
import '../style/Tags.css';

const Tags = ({ filters }) => {
  return (
    <section className='bloc_tags'>
      <div className="bloc_tags_para">
        <p>{filters}</p>
      </div>
    </section>
  );
};

export default Tags;