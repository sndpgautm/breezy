import { CityWeatherInfo, WeatherActionTypes } from '../../types';
import { GET_WEATHER_FOR_CITY_SUCCESS } from '../actions/types';

const initialState = {
  weatherInfos: [] as CityWeatherInfo[],
};

const weatherReducer = (state = initialState, action: WeatherActionTypes) => {
  switch (action.type) {
    case GET_WEATHER_FOR_CITY_SUCCESS:
      return action.payload
        ? {
            ...state,
            weatherInfos: [...state.weatherInfos, action.payload],
          }
        : state;

    default:
      return state;
  }
};

export default weatherReducer;
