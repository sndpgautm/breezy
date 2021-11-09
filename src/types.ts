import { type } from 'os';
import {
  ADD_CITY_AS_FAV,
  GET_CITIES_WITH_PREFIX,
  GET_CITIES_WITH_PREFIX_SUCCESS,
  GET_WEATHER_FOR_CITY,
  GET_WEATHER_FOR_CITY_SUCCESS,
} from './redux/actions/types';

export type City = {
  id: number;
  city: string;
  name: string;
  country: string;
  countryCode: string;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type CityWeatherInfo = {
  weather: Weather[];
  main: {
    temp: number;
    feels_like: number;
  };
  dt: number;
  sys: {
    country: string;
  };
  timezone: number;
  id: number;
  name: string;
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

export type GetWeatherInfo = {
  type: typeof GET_WEATHER_FOR_CITY;
  payload: string;
};

export type GetWeatherInfoSuccess = {
  type: typeof GET_WEATHER_FOR_CITY_SUCCESS;
  payload: CityWeatherInfo;
};

export type WeatherActionTypes = GetWeatherInfo | GetWeatherInfoSuccess;

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
