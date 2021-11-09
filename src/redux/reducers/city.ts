import { City, CityActionTypes } from '../../types';
import {
  ADD_CITY_AS_FAV,
  GET_CITIES_WITH_PREFIX_SUCCESS,
} from '../actions/types';

const initialState = {
  favCities: [] as City[],
  cities: [] as City[],
  loading: true,
};

const cityReducer = (state = initialState, action: CityActionTypes) => {
  switch (action.type) {
    case GET_CITIES_WITH_PREFIX_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        loading: false,
      };
    case ADD_CITY_AS_FAV:
      return {
        ...state,
        favCities: [...state.favCities, action.payload],
      };
    default:
      return state;
  }
};

export default cityReducer;
