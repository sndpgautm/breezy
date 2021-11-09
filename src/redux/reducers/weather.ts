import { WeatherActionTypes } from '../../types';
import { GET_WEATHER_FOR_CITY_SUCCESS } from '../actions/types';

const initialState = {
  weatherInfos: [],
};

const weatherReducer = (state = initialState, action: WeatherActionTypes) => {
  switch (action.type) {
    case GET_WEATHER_FOR_CITY_SUCCESS:
      return {
        ...state,
        weatherInfos: [...state.weatherInfos, action.payload],
      };

    default:
      return state;
  }
};

export default weatherReducer;
