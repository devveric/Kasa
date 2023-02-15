import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Accomodation from './pages/Accomodation';
import accomodations from './data/Data';

const App = () => {
  const data = accomodations;
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/about' element={<About />} />
          <Route path='/:id' element={<Accomodation data={data} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
