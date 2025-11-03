import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Contact from "./pages/contact.jsx";
import Internship from "./pages/internship.jsx";
import LanguageSelector from "./components/LanguageSelector"; // Add this import
// import Contact from "./pages/contact.jsx";
// import About from "./pages/about-us";
import "./styles/config.css";
import "./styles/libs.css";
import "./styles/style.css";
import "./styles/responsive.css";
// import "./styles/PortfolioCarousel.css";
// import "./styles/header.css";
import "./styles/stg.css"; // Added grid system styles

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // i18n.changeLanguage("en"); //force it to be english
    // Listen for language changes from the selector
    const handleLanguageChange = (event) => {
      i18n.changeLanguage(event.detail.language);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, [i18n]);

  return (
    <Router>
      <div className="bringer-site-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers/internship" element={<Internship />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
        <LanguageSelector /> {/* Add this line */}
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;
