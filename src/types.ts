import { type } from 'os';
import {
  ADD_CITY_AS_FAV,
  CLEAR_API_ERROR,
  GET_CITIES_WITH_PREFIX,
  GET_CITIES_WITH_PREFIX_SUCCESS,
  GET_WEATHER_FOR_CITY,
  GET_WEATHER_FOR_CITY_SUCCESS,
  HANDLE_API_ERROR,
  REMOVE_CITY_FROM_FAV,
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
};

export type CityWeatherInfo = {
  weather: Weather[];
  main: {
    temp: number;
    feels_like: number;
  };
  sys: {
    country: string;
  };
  timezone: number;
  id: number;
  name: string;
};

// City Action Types

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

export type RemoveCityFromFav = {
  type: typeof REMOVE_CITY_FROM_FAV;
  payload: City;
};

export type CityActionTypes =
  | GetCitiesWithPrefix
  | GetCitiesWithPrefixSuccess
  | AddCityAsFav
  | RemoveCityFromFav;

// Weather Action Types

export type GetWeatherInfo = {
  type: typeof GET_WEATHER_FOR_CITY;
  payload: {
    cityName: string;
    countryCode: string;
  };
};

export type GetWeatherInfoSuccess = {
  type: typeof GET_WEATHER_FOR_CITY_SUCCESS;
  payload: CityWeatherInfo;
};

export type WeatherActionTypes = GetWeatherInfo | GetWeatherInfoSuccess;

// API Error Action Types

export type HandleApiError = {
  type: typeof HANDLE_API_ERROR;
  payload: string;
};

export type ClearApiError = {
  type: typeof CLEAR_API_ERROR;
};

export type ErrorActionTypes = HandleApiError | ClearApiError;

export type CityReducerState = {
  favCities: City[] | [];
  cities: City[] | [];
  loading: boolean;
};

export type WeatherReducerState = {
  weatherInfos: CityWeatherInfo[] | [];
};

export type ErrorReducerState = {
  message: string;
};
export type RootState = {
  cityReducer: CityReducerState;
  weatherReducer: WeatherReducerState;
  errorReducer: ErrorReducerState;
};
