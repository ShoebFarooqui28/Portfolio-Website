import React from 'react';
import '../styles/Footer.css';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer text-center text-white">
      <div className="container pt-4">
        <section className="mb-4">
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="mailto:shoebfarooqui2@gmail.com" role="button">
            <FaEnvelope />
          </a>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.instagram.com/shoebbbsss/" role="button" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/shoeb-farooqui-301935247/" role="button" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/ShoebFarooqui28" role="button" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </section>
      </div>
      <div className="footer-bottom text-center p-1">
        © 2025 Copyright : Shoeb Farooqui
      </div>
    </footer>
  );
}

export default Footer;
