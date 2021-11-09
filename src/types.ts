import { type } from 'os';
import {
  ADD_CITY_AS_FAV,
  GET_CITIES_WITH_PREFIX,
  GET_CITIES_WITH_PREFIX_SUCCESS,
} from './redux/actions/types';

export type City = {
  id: number;
  city: string;
  name: string;
  country: string;
};

export type GetCitiesWithPrefix = {
  type: typeof GET_CITIES_WITH_PREFIX;
  payload: string;
};

export type GetCitiesWithPrefixSuccess = {
  type: typeof GET_CITIES_WITH_PREFIX_SUCCESS;
  payload: City[];
};

export type AddCityAsFav = {
  type: typeof ADD_CITY_AS_FAV;
  payload: City;
};

export type CityActionTypes =
  | GetCitiesWithPrefix
  | GetCitiesWithPrefixSuccess
  | AddCityAsFav;

export type CityReducerState = {
  favCities: City[] | [];
  cities: City[] | [];
  loading: boolean;
};

export type RootState = {
  cityReducer: CityReducerState;
};

export type CityListProps = {
  cities: City[];
};
