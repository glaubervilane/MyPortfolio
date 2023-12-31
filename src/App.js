import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ParticlesComponent from './components/Particles';
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience';
import Academics from './components/Academic';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ParticlesComponent />
      <Navbar />
      <Header />
      <About/>
      <Projects/>
      <Experience/>
      <Academics/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
