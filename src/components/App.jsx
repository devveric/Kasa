import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../css/App.css';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
