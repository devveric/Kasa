import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/Card.css';
import Details from '../components/Details';
import Slider from '../components/Slider';
import Host from '../components/Host';

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
              <div className="bloc_details-host">
                <Details data={selection} />
                <Host data={selection} />
              </div>
            </div>
          ))
      }
    </>
  );
};

export default Card;