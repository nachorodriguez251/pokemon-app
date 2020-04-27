import React from 'react';
import './styles.css';
import Button from '../../../../components/Button';

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

function index(props) {
  return (
    <div className="pokemon-container">
      <div className="pokemon-title">
        <img
          className="pokemon-image"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.number}.png`}
          alt="001"
        />
        <h3 className="pokemon-name">
          { props.name }
        </h3>
        <h4 className="pokemon-number">
          #
          { props.number }
        </h4>
      </div>
      <div className="pokemon-details">
        <p className="pokemon-description">
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
          <Button
            text="select"
          />
        </div>
      </div>
    </div>
  );
}

export default index;
