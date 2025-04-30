// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import Navbar from './compononts/Navbar';
import Footer from './compononts/Footer';
import Contact from './pages/contact';

import Home from './pages/Home';
import About from './pages/About';  
import Services from './pages/Services';
import Career from './pages/Career';
// import Jobs from './pages/Jobs';
// import Blogs from './pages/Blogs';  
import Internships from './pages/Internships';
// import './assets/styles/main.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/internships" element={<Internships />} />


        {/* Add other routes here */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
