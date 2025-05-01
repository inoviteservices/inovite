// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/css/style.css'; // Import your CSS file here
import './assets/css/config.css'; // Import your CSS file here
import './assets/css/responsive.css'; // Import your CSS file here
import './assets/css/stg.css'; // Import your CSS file here
import './assets/css/libs.css'; // Import your CSS file here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>

);
