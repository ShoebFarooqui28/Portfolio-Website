import React from 'react';
import Hero from '../assets/Hero.png';
import ContactButton from '../components/ContactButton';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="wrapper container d-lg-flex justify-content-center align-items-center vh-100">
      <div className="row align-items-center p-2 p-lg-0 m-0">

        {/* Left Side - Text */}
        <div className="left col-lg-8 text-start p-4">
          <h1 className="hero-title display-1 fw-bold">Hello,</h1>
          <p className="hero-desc m-0 fs-4 fs-lg-2">
            I'm <span className="fw-bold">Shoeb</span>! I build powerful applications and dynamic web apps with a focus on performance and user experience.
          </p>
        </div>

        {/* Right Side - Image & Button */}
        <div className="right col-lg-4 p-4">
          <img src={Hero} alt="person-coding" className="hero-img img-fluid" />

          <div className="contact p-5">
            <ContactButton />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
