import React from 'react';
import '../style/Tags.css';

const Tags = ({ props }) => {
  return (
    <section className='bloc_tags'>
      <div className="bloc_tags_para">
        <p>{props.tags[0]}</p>
      </div>
      <div className="bloc_tags_para">
        <p>{props.tags[1]}</p>
      </div>
    </section>
  );
};

export default Tags;