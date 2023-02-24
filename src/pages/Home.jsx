import React from 'react';
import { Announcement } from '../config';
import data from '../data/DataList.json';
import '../style/Home.css';

const Home = () => {
  return (
    <section className='bloc_home-section'>
      <div className="bloc_home-title">
        <h1>Chez vous, <span>partout et ailleurs</span></h1>
      </div>
      <div className='bloc_home-announcement'>
        {
          data.map((select) => {
            return <Announcement data={select} key={select.id} />;
          })
        }
      </div>
    </section>
  );
};


export default Home;