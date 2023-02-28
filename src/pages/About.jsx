import React from 'react';
import { Collapse } from '../config';
import data from '../data/CollapseData.json';
import '../style/About.css';

const About = () => {
  return (
    <section className='container_about'>
      <div className='bloc_about-img'></div>
      <div className='bloc_about-collapse'>
        {data.map((list) => {
          return <Collapse key={list.id} content={{ name: list.name, conditions: list.condition }} />;
        })
        }
      </div>
    </section>
  );
};

export default About;