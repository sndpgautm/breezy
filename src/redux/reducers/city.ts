import { City, CityActionTypes } from '../../types';
import {
  ADD_CITY_AS_FAV,
  GET_CITIES_WITH_PREFIX_SUCCESS,
  REMOVE_CITY_FROM_FAV,
} from '../actions/types';

const savedCities = () => {
  const data = window.localStorage.getItem('favCities');
  return data !== null ? JSON.parse(data) : [];
};

const initialState = {
  favCities: savedCities() as City[],
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
    case REMOVE_CITY_FROM_FAV:
      return {
        ...state,
        favCities: state.favCities.filter(
          (city) => city.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cityReducer;
