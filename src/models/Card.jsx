import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/Card.css';
import NotFound from '../pages/NotFound';
import Details from '../components/Details';
import Slider from '../components/Slider';
// import Host from '../components/Host';
import Tags from '../components/Tags';
import Rating from '../components/Rating';

const Card = ({ data }) => {
  const { id } = useParams();
  const paramsId = data.find((select) => select.id === id);
  console.log(paramsId);
  if (paramsId) {
    return (
      <div className="bloc_card">
        <Slider data={paramsId} />
        <div className="bloc_details-host">
          <Details data={data} />
          {/* <Host data={data} /> */}
        </div>
        <div className="bloc_tags-rating">
          <Tags data={data[1]} />
          <Rating />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <NotFound />
      </>
    );
  }
};

export default Card;