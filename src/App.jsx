import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Accomodation from './pages/Accomodation';
import DataList from './data/DataList';
import CollapseData from './data/CollapseData';

const App = () => {
  const propsList = DataList;
  const propsCol = CollapseData;
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home data={propsList} />} />
          <Route path='/about' element={<About data={propsCol} />} />
          <Route path='/:id' element={<Accomodation data={propsList} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;