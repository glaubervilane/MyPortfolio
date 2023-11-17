import React from 'react'
import MyLogo from '../images/myLogo.png'
import '../App.css';
// React fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id='nav'>
      <div className="container">
        <a className="navbar-brand" href="/"><img className='logo' src={MyLogo} alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#header-wrapper">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-wraper">about me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects-wrapper">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience-wrapper">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#academic-wrapper">Academics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-wrapper">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar