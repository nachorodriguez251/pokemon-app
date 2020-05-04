import React from 'react';
import './styles.css';

function NoMatch() {
  return (
    <div>
      <h1 className="no-match-title">Sorry - Page Not Found</h1>
      <img
        src="https://assets.pokemon.com/static2/_ui/img/global/psyduck.png"
        alt="404"
      />
    </div>
  );
}

export default NoMatch;
