import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home'; 
import Articles from './pages/Articles'; 
import Article from './pages/Article';
import About from './pages/About'; 
import Tags from './pages/Tags';

const App = () => {
  const [activeLink, setActiveLink] = React.useState('home');
  const [isDarkMode, setDarkMode] = React.useState(false);

  // On page load, retrieve stored dark mode preference
  React.useEffect(() => {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    localStorage.setItem('isDarkMode', JSON.stringify(checked)); 
  };

return (
  <>
  <BrowserRouter>

    <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} activeLink={activeLink} setActiveLink={setActiveLink} />

    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home" />} />
    </Routes>

  </BrowserRouter>
  </>
);
}

export default App;
