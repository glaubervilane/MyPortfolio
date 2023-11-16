import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ParticlesComponent from './components/Particles';

function App() {
  return (
    <>
      <ParticlesComponent />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
