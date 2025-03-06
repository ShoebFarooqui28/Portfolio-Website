import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ContactButton.css';

const ContactButton = () => {
  const navigate = useNavigate(); 

  return (
    <div className="d-flex align-items-center justify-content-center">
      <button type="button" className="btn contact-btn fs-5" onClick={() => navigate('/contact')}>
        Contact Now!
      </button>
    </div>
  );
};

export default ContactButton;
