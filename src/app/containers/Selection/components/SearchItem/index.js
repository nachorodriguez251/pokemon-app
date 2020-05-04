import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectForBattle, fetchPokemonDetails } from '../../actions';
import Button from '../../../../components/Button';
import './styles.css';

const limitDescription = (desc, limit = 200) => {
  const newDesc = [];
  if (desc.length > limit) {
    desc.split(' ').reduce((acc, curr) => {
      if (acc + curr.length <= limit) {
        newDesc.push(curr);
      }
      return acc + curr.length;
    }, 0);

    // if desc is longer than expected, return the new desc with ... at the end
    return `${newDesc.join(' ')} ...`;
  }
  return desc;
};

function SearchItem(props) {
  const dispatch = useDispatch();
  const battle1 = useSelector((state) => state.battle1);
  const battle2 = useSelector((state) => state.battle2);

  return (
    <div className="pokemon-container">
      <div className="pokemon-title">
        <Link
          to={`/pokemon/${props.id}`}
          onClick={() => dispatch(fetchPokemonDetails(props.id, dispatch))}
        >
          <img
            className="pokemon-image"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.number}.png`}
            alt={props.number}
          />
        </Link>
        <h3 className="pokemon-name">
          { props.name }
        </h3>
        <h4 className="pokemon-number">
          #
          { props.number }
        </h4>
      </div>
      <div className="pokemon-details">
        <p className="pokemon-description block-with-text">
          { limitDescription(props.description) }
        </p>
        <div className="pokemon-types">
          <span
            className={props.type1}
          >
            { props.type1 }
          </span>
          <span
            className={props.type2}
          >
            { props.type2 }
          </span>
        </div>
        <div className="pokemon-select-container">
          <Link
            to="selection"
            onClick={() => dispatch(selectForBattle(props.number, props.name))}
          >
            <Button
              styleName="btn-selection"
              text="Select"
              disable={battle1 && battle2}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
