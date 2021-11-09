import { City } from '../../types';
import {
  ADD_CITY_AS_FAV,
  GET_CITIES_WITH_PREFIX,
  GET_CITIES_WITH_PREFIX_SUCCESS,
} from './types';

export const getCitiesWithPrefix = (cityPrefix: string) => {
  return {
    type: GET_CITIES_WITH_PREFIX,
    payload: cityPrefix,
  };
};

export const getCitiesWithPrefixSuccess = (cities: City[]) => {
  return {
    type: GET_CITIES_WITH_PREFIX_SUCCESS,
    payload: cities,
  };
};

export const addCityAsFav = (city: City) => {
  return {
    type: ADD_CITY_AS_FAV,
    payload: city,
  };
};
