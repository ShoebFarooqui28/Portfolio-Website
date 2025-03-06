import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler && window.innerWidth < 992){
      navbarToggler.click();
    }

  }
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        {/* Replaced <a> with <Link> for better React Router compatibility */}
        <Link className="navbar-brand" to="/">Shoeb Farooqui</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link 
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`} 
              to="/" onClick={handleNavLinkClick}
            >
              Home
            </Link>
            <Link 
              className={`nav-link ${location.pathname === "/services" ? "active" : ""}`} 
              to="/services" onClick={handleNavLinkClick}
            >
              Services
            </Link>
            <Link 
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} 
              to="/about" onClick={handleNavLinkClick}
            >
              About
            </Link>
            <Link 
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} 
              to="/contact" onClick={handleNavLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
