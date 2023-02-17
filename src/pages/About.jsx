import React from 'react';
import Collapse from '../components/Collapse';
import '../style/About.css';

const About = (props) => {
  return (
    <section className='bloc_about'>
      <div className='bloc_about-img'>
      </div>
      <Collapse data={props} />
    </section>
  );
};

export default About;