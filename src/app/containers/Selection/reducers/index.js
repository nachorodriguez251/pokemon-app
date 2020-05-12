import {
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_REQUEST,
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  SELECT_FOR_BATTLE,
  CLEAR_POKEMON_1,
  CLEAR_POKEMON_2,
  CHANGE_PAGE,
  FILTER_NAME,
  CHANGE_TYPE_1,
  CHANGE_TYPE_2,
} from '../actionTypes';

const initialState = {
  battle1: 0,
  battle2: 0,
  type1: '',
  type2: '',
  filterName: '',
  loadingList: false,
  listUrl: [],
  loadingDetails: false,
  details: 0,
  page: 1,
};

const reducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DETAILS_REQUEST:
      return {
        ...state,
        loadingDetails: true,
      };

    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
        loadingDetails: false,
      };

    case FETCH_LIST_REQUEST:
      return {
        ...state,
        loadingList: true,
      };

    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        listUrl: action.payload,
        loadingList: false,
      };

    case SELECT_FOR_BATTLE:
      // si el pokemon 1 es distinto de cero, actualizar pokemon 2
      if (!state.battle1) {
        newState = {
          ...state,
          battle1: {
            number: action.payload.number,
            name: action.payload.name,
          },
        };
      } else {
        newState = {
          ...state,
          battle2: {
            number: action.payload.number,
            name: action.payload.name,
          },
        };
      }

      return {
        ...newState,
        filterName: '',
        type1: '',
        type2: '',
        page: 1,
      };

    case CLEAR_POKEMON_1:
      return {
        ...state,
        battle1: 0,
      };

    case CLEAR_POKEMON_2:
      return {
        ...state,
        battle2: 0,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case CHANGE_TYPE_1:
      return {
        ...state,
        type1: action.payload.changeType,
        page: 1,
      };

    case CHANGE_TYPE_2:
      return {
        ...state,
        type2: action.payload.changeType,
        page: 1,
      };

    case FILTER_NAME:
      return {
        ...state,
        filterName: action.payload,
        page: 1,
      };

    default: return state;
  }
};

export default reducer;
