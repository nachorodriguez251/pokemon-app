import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BattleGround from '../BattleGround';
import SearchBox from './components/SearchBox';
import SearchItem from './components/SearchItem';
import Pagination from './components/Pagination';
import './styles.css';
import { changePage, fetchPokemonList, fetchPokemonFilteredList } from './actions';
import useDebounce from './hooks';

function Selection() {
  // get state variables
  const dispatch = useDispatch();
  const pokemonsFromApi = useSelector((state) => state.listUrl);
  const pageNo = useSelector((state) => state.page);
  const type1 = useSelector((state) => state.type1);
  const type2 = useSelector((state) => state.type2);
  const filteredName = useSelector((state) => state.filterName);
  const loadingList = useSelector((state) => state.loadingList);


  // set variables for pagination
  const pokemonsPerPage = 9;
  const isFiltered = (type1 !== '' || type2 !== '' || filteredName !== '');
  const listLength = (isFiltered ? pokemonsFromApi.length : 151);
  const inicio = (isFiltered ? (pageNo - 1) * pokemonsPerPage : 0);
  const fin = (isFiltered ? pokemonsPerPage * pageNo : 9);
  const paginate = (pageNumber) => dispatch(changePage(pageNumber));


  // debouncing
  const debouncedFilter = useDebounce(filteredName, 1000);


  useEffect(() => {
    if (debouncedFilter === '' && !type1 && !type2) {
      dispatch(fetchPokemonList(pageNo, pokemonsPerPage, dispatch));
    } else {
      dispatch(fetchPokemonFilteredList(debouncedFilter, type1, type2, dispatch));
    }
  }, [pageNo, type1, type2, debouncedFilter]);


  return (
    <div className="main-container">
      <div>
        <BattleGround />
        <SearchBox />
        {
          loadingList
            ? <h1>Loading...</h1>
            : (
              <div className="results-container">
                {
                pokemonsFromApi.slice(inicio, fin)
                  .map((pokemon) => (
                    <SearchItem
                      key={pokemon.id}
                      id={pokemon.id}
                      name={pokemon.name}
                      number={(`000${pokemon.id}`).substr(-3)}
                      description={pokemon.description}
                      type1={pokemon.types[0]}
                      type2={pokemon.types[1]}
                    />
                  ))
                }
              </div>
            )
        }
        <div className="pagination-container">
          <Pagination
            pokemonsPerPage={pokemonsPerPage}
            totalPokemons={listLength}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default Selection;
