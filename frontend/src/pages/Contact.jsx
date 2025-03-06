import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className="container text-center">
      <h1 className='display-5 fw-bold mt-5'>Get in Touch</h1>
      <p className='text-muted'>Feel free to reach out for collaborations or just a chat!</p>
      
      <div className="row my-4 justify-content-center">
        <div className="col-md-4">
          <div className="contact-card">
            <FaEnvelope className='contact-icon' />
            <h5>Email</h5>
            <p>farooquishoeb2@gmail.com</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-card">
            <FaPhone className='contact-icon' />
            <h5>Phone</h5>
            <p>+91 7738258972</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-card">
            <FaMapMarkerAlt className='contact-icon' />
            <h5>Location</h5>
            <p>Mumbai, India</p>
          </div>
        </div>
      </div>
      
      <div className='contact-form mt-4'>
        <h3 className='fw-bold'>Send a Message</h3>
        <form>
          <input type="text" className="form-control my-2" placeholder="Your Name" required />
          <input type="email" className="form-control my-2" placeholder="Your Email" required />
          <textarea className="form-control my-2" rows="4" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary mt-2 mt-lg-3 mb-4" style={{ color: 'black' }}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact