import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearPokemon1, clearPokemon2 } from '../Selection/actions';
import Button from '../../components/Button';

function BattleGround() {
  const battle1 = useSelector((state) => state.battle1);
  const battle2 = useSelector((state) => state.battle2);
  const dispatch = useDispatch();

  return (
    <div className="battle-ground-container">
      <h4 className="battle-ground-title">
        Battle
        <br />
        Ground
      </h4>
      <div className="battle-ground-pokemon-1">
        { battle1
          ? (
            <ion-icon
              onClick={() => dispatch(clearPokemon1())}
              name="close-outline"
              size="small"
            />
          )
          : ''}

        { battle1
          ? (
            <img
              className="selected-pokemon"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${battle1.number}.png`}
              alt="poke1"
            />
          )
          : (
            <ion-icon
              name="help-outline"
            />
          )}
        <h4 className="battle-ground-pokemon-name">
          { battle1 ? battle1.name : 'Select Pokemon 1'}
        </h4>
      </div>
      <h3>
        vs
      </h3>
      <div className="battle-ground-pokemon-2">
        { battle2
          ? (
            <ion-icon
              onClick={() => dispatch(clearPokemon2())}
              name="close-outline"
              size="small"
            />
          )
          : ''}

        { battle2
          ? (
            <img
              className="selected-pokemon"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${battle2.number}.png`}
              alt="poke2"
            />
          )
          : (
            <ion-icon
              name="help-outline"
            />
          )}
        <h4 className="battle-ground-pokemon-name">
          { battle2 ? battle2.name : 'Select Pokemon 2'}
        </h4>
      </div>

      <Link
        className=""
        to="selection"
      >
        <Button
          styleName="btn-fight"
          text="Fight!"
          disable={!battle1 || !battle2}
        />
      </Link>
    </div>
  );
}

export default BattleGround;
