import {
  fetchPokemonDetailsFromApi,
  fetchPokemonListFromApi,
  fetchFiletedList,
} from '../api';

import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
  SELECT_FOR_BATTLE,
  CLEAR_POKEMON_1,
  CLEAR_POKEMON_2,
  CHANGE_PAGE,
  FILTER_NAME,
  CHANGE_TYPE_1,
  CHANGE_TYPE_2,
} from '../actionTypes';

export const fetchDetailsRequest = () => ({
  type: FETCH_DETAILS_REQUEST,
});

export const fetchDetailsSuccess = (pokemonDetails) => ({
  type: FETCH_DETAILS_SUCCESS,
  payload: pokemonDetails,
});

export const fetchListRequest = () => ({
  type: FETCH_LIST_REQUEST,
});

export const fetchListSuccess = (pokemonList) => ({
  type: FETCH_LIST_SUCCESS,
  payload: pokemonList,
});

export const selectForBattle = (number, name) => ({
  type: SELECT_FOR_BATTLE,
  payload: { number, name },
});

export const changeType1 = (changeType) => ({
  type: CHANGE_TYPE_1,
  payload: { changeType },
});

export const changeType2 = (changeType) => ({
  type: CHANGE_TYPE_2,
  payload: { changeType },
});

export const clearPokemon1 = () => ({
  type: CLEAR_POKEMON_1,
});

export const clearPokemon2 = () => ({
  type: CLEAR_POKEMON_2,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});

export const filterName = (name) => ({
  type: FILTER_NAME,
  payload: name,
});

export const fetchPokemonDetails = (id, dispatch) => () => {
  try {
    dispatch(fetchDetailsRequest());
    const toReturn = fetchPokemonDetailsFromApi(id);
    toReturn.then((result) => {
      dispatch(fetchDetailsSuccess(result));
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPokemonList = (pageNo, pokemonsPerPage, dispatch) => () => {
  try {
    dispatch(fetchListRequest());
    const toReturn = fetchPokemonListFromApi(pageNo, pokemonsPerPage);
    toReturn.then((result) => {
      dispatch(fetchListSuccess(result));
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPokemonFilteredList = (name, type1, type2, dispatch) => () => {
  try {
    dispatch(fetchListRequest());
    const toReturn = fetchFiletedList(name, type1, type2);
    toReturn.then((result) => {
      dispatch(fetchListSuccess(result));
    });
  } catch (error) {
    console.log(error);
  }
};
