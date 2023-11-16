import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ParticlesComponent from './components/Particles';
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <ParticlesComponent />
      <Navbar />
      <Header />
      <About/>
      <Projects/>
    </>
  );
}

export default App;
