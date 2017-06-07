import React from 'react';
import { Link } from 'react-router';

export default function Navbar (props) {

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">

        <button type="button" className="btn btn-secondary navbar-btn">
          <Link to="/Campuses">CAMPUSES</Link>
        </button>
        <button type="button" className="btn btn-secondary navbar-btn">
          <Link to="/Students">STUDENTS</Link>
        </button>
    </div>
  </nav>
  )}
