import React from 'react';
import './App.css';
import Home from './pages/Home';
import Router from './router';

function App() {
  return (
    <div className="container">
      <h1>Blueworking</h1>
      <div className="content">
        <Router/>
      </div>
    </div>
  );
}



export default App;
