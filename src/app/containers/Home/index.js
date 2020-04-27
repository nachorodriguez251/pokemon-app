import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Hero from '../Hero';
import Info from '../Info';
import Steps from '../Steps';


function index() {
  return (
    <div>
      <Hero />
      <Info />
      <Steps />
      <div className="btn-container">
        <Link className="btn-home" to="/selection"> Let&apos;s do it ! </Link>
      </div>
    </div>
  );
}

export default index;
