import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import '../css/Home.css';

const Home = () => {
  return (
    <div>
      <Navigation />
      <section className='bloc_home-section'>
        <div className="bloc_home-title">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
