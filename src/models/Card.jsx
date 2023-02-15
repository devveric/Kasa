import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider';

const Card = ({ data }) => {
  const { id } = useParams();
  return (
    <>
      {
        data
          .filter((list) => list.id === id)
          .map((selection) => (
            <div key={selection.id}>
              <Slider data={selection} />
            </div>
          ))
      }
    </>
  );
};

export default Card;