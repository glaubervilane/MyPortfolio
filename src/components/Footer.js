import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="footer-title">Connect with Me</h4>
            <ul className="social-icons">
              <li><a href="https://www.linkedin.com/in/glaubervilane/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="https://github.com/glaubervilane" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
              <li><a href="https://glaubermarques.writing.io/" target="_blank" rel="noopener noreferrer"><i className="fab fa-blogger"></i></a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="footer-title">Contact Information</h4>
            <p>Email: glauberfmarques@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Glauber Marques. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
