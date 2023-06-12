import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@700&family=Kanit:ital,wght@0,300;0,400;1,300;1,400&family=Noto+Sans:wght@700&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
