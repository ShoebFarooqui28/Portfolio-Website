import React from 'react';
import python from '../assets/python.png';
import atom from '../assets/atom.png';
import api from '../assets/api.png';
import mongo from '../assets/mongodb.png';
import '../styles/Services.css';

const Services = () => {
  return (
    <div className="container text-center">
      <h1 className="display-5 fw-bold mt-5">Services</h1>

      <div className="row my-4">
        <div className="col-lg col-sm-6">
          <div className="card">
            <img src={atom} className="card-img-top" alt="React Front-End" />
            <div className="card-body">
              <h5 className="card-title fw-bold">React Front-End</h5>
              <p className="card-text text-black">
                React.js is a powerful JavaScript library for building fast and interactive user interfaces. It uses a component-based architecture, making it easy to create reusable UI elements.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <img src={python} className="card-img-top" alt="Flask Back-End" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Flask Back-End</h5>
              <p className="card-text text-black">
                Flask is a lightweight Python web framework for building web apps and APIs. It’s minimal, flexible, and easy to use, making it great for rapid development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <img src={api} className="card-img-top" alt="Rest API" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Rest API</h5>
              <p className="card-text text-black">
                A REST API allows seamless communication between systems using standard HTTP methods. It is scalable, stateless, and widely used for web and mobile applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <img src={mongo} className="card-img-top" alt="MongoDB" />
            <div className="card-body">
              <h5 className="card-title fw-bold">MongoDB</h5>
              <p className="card-text text-black">
                MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is scalable, schema-less, and ideal for handling large datasets in modern applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Services;
