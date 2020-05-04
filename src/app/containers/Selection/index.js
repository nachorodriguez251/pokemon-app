import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BattleGround from '../BattleGround';
import SearchBox from './components/SearchBox';
import SearchItem from './components/SearchItem';
import Pagination from './components/Pagination';
import './styles.css';
import api from '../../base/api';
import { changePage } from './actions';

function Selection() {
  const pokemons = Object.values(api);
  const dispatch = useDispatch();
  const pageNo = useSelector((state) => state.page);
  const type1 = useSelector((state) => state.type1);
  const type2 = useSelector((state) => state.type2);
  const filteredName = useSelector((state) => state.filterName);
  let filteredPokemons = pokemons.filter((pokemon) => (pokemon.name.startsWith(filteredName)));

  if (type1 !== '') filteredPokemons = filteredPokemons.filter((pokemon) => (pokemon.types.indexOf(type1) !== -1));
  if (type2 !== '') filteredPokemons = filteredPokemons.filter((pokemon) => (pokemon.types.indexOf(type2) !== -1));

  const [pokemonsPerPage] = useState(9);

  // get current Pokemons
  const indexOfLastPokemon = pageNo * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  // change page
  const paginate = (pageNumber) => dispatch(changePage(pageNumber));

  return (
    <div className="main-container">
      <BattleGround />
      <SearchBox />
      <div className="results-container">
        {
          currentPokemons.map((pokemon) => (
            <SearchItem
              key={pokemon._id}
              id={pokemon.national_id}
              name={pokemon.name}
              number={(`000${pokemon.pkdx_id}`).substr(-3)}
              description={pokemon.description}
              type1={pokemon.types[0]}
              type2={pokemon.types[1]}
            />
          ))
         }
      </div>
      <div className="pagination-container">
        <Pagination
          pokemonsPerPage={pokemonsPerPage}
          totalPokemons={filteredPokemons.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Selection;
