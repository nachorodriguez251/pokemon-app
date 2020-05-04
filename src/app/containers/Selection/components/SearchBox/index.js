import React from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterName, changeType1, changeType2 } from '../../actions';
import Select from '../../../../components/Select';

function SearchBox() {
  const dispatch = useDispatch();
  const filteredName = useSelector((state) => state.filterName);
  const type1 = useSelector((state) => state.type1);
  const type2 = useSelector((state) => state.type2);
  
  const chType1 = (type) => dispatch(changeType1(type));
  const chType2 = (type) => dispatch(changeType2(type));

  return (
    <div className="search-container">
      <h2>Select your Pokemon</h2>
      <div className="search-box">
        <h4>Search</h4>
        <form className="search-form">
          <input
            type="text"
            placeholder="Name"
            value={filteredName}
            onChange={(e) => dispatch(filterName(e.target.value.toLowerCase()))}
          />

          <Select
            id="type1"
            name="type1"
            title="Select Type 1"
            value={type1}
            change={chType1}
            options={['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison',
              'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy']}
          />

          <Select
            id="type2"
            name="type2"
            title="Select Type 2"
            value={type2}
            change={chType2}
            options={['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison',
              'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy']}
          />

          <input
            className="btn-app"
            type="submit"
            value="Filter"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
