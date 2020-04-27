import React, { useState } from 'react';
import BattleGround from './components/BattleGround';
import SearchBox from './components/SearchBox';
import SearchItem from './components/SearchItem';
import Pagination from './components/Pagination';
import './styles.css';
import api from '../../base/api';

function Selection() {
  const pokemons = Object.values(api);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(9);

  // get current Pokemons
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main-container">
      <BattleGround />
      <SearchBox />
      <div className="results-container">
        {
          currentPokemons.map(pokemon =>
            <SearchItem
              key = { pokemon._id }
              name = { pokemon.name }
              number = { ('000' + pokemon.pkdx_id).substr(-3) }
              description = { pokemon.description }
              type1 = { pokemon.types[0] }
              type2 = { pokemon.types[1] }
            />)
         }
      </div>
      <div className="pagination-container">
        <Pagination
          pokemonsPerPage={pokemonsPerPage}
          totalPokemons={pokemons.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Selection;
