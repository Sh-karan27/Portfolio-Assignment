import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Error from './Components/Error';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='projects' element={<Work />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />{' '}
        {/* Make sure Error component is imported */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
