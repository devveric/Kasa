import React from 'react';
import Announcement from '../components/Announcement';
import '../style/Home.css';

const Home = ({ data }) => {
  return (
    <div>
      <section className='bloc_home-section'>
        <div className="bloc_home-title">
          <h1>Chez vous, <span>partout et ailleurs</span></h1>
        </div>
        <div className='bloc_home-announcement'>
          <Announcement data={data} />
        </div>
      </section>
    </div>
  );
};

export default Home;
