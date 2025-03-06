import React from 'react'
import '../styles/Header.css'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Shoeb Farooqui</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
            <Link className={`nav-link ${location.pathname === "/services" ? "active" : ""}`} to="/services">Services</Link>
            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Header

