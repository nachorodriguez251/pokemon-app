import fetchData from '../api';

import {
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_REQUEST,
  SELECT_FOR_BATTLE,
  CLEAR_POKEMON_1,
  CLEAR_POKEMON_2,
  CHANGE_PAGE,
  FILTER_NAME,
  CHANGE_TYPE_1,
  CHANGE_TYPE_2,
} from '../actionTypes';

export const fetchDetailsSuccess = (pokemonDetails) => ({
  type: FETCH_DETAILS_SUCCESS,
  payload: pokemonDetails,
});

export const fetchDetailsRequest = () => ({
  type: FETCH_DETAILS_REQUEST,
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

export const fetchPokemonDetails = (id, dispatch) => {
  return () => {
    try {
      fetchData(id, dispatch);
    } catch (error) {
      console.log(error);
    }
  };
};
