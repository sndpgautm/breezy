import { CityWeatherInfo } from '../../types';
import { GET_WEATHER_FOR_CITY, GET_WEATHER_FOR_CITY_SUCCESS } from './types';

export const getWeatherInfo = (cityName: string, countryCode: string) => {
  return {
    type: GET_WEATHER_FOR_CITY,
    payload: { cityName, countryCode },
  };
};

export const getWeatherInfoSuccess = (cityWeatherInfo: CityWeatherInfo) => {
  return {
    type: GET_WEATHER_FOR_CITY_SUCCESS,
    payload: cityWeatherInfo,
  };
};
