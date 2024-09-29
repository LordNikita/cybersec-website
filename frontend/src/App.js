import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home'; 
import About from './pages/About'; 

const App = () => {
  const [activeLink, setActiveLink] = React.useState('home');


return (
  <>
  <BrowserRouter>

    <Header activeLink={activeLink} setActiveLink={setActiveLink} />
    
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home" />} />
    </Routes>

  </BrowserRouter>
  </>
);
}

export default App;
