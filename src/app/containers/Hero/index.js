import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Hero() {
  return (
    <header>
      <div className="title">
        <h1 className="shiny">
          Pokemon
        </h1>
        <h2 className="shiny">
          Battle
        </h2>
        <h3 className="h3-hero">
          Test your skills building
          <br />
          a Pokemon Application
        </h3>
      </div>

      <div className="btn-hero">
        <Link className="btn-home" to="/selection">
          Let&apos;s do it !
        </Link>
      </div>
    </header>
  );
}

export default Hero;
