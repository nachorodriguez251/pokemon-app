import React from 'react';
import './styles.css';
import Button from '../../../../components/Button';

function index() {
  return (
    <div className="battle-ground-container">
      <h4>
        Battle
        <br />
        Ground
      </h4>
      <img
        className="selected-pokemon"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
        alt="poke1"
      />
      <h3>
        vs
      </h3>
      <img
        className="selected-pokemon"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png"
        alt="poke2"
      />
      <Button
        text="Fight !"
      />
    </div>
  );
}

export default index;
