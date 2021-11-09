import { call, put, takeLatest } from '@redux-saga/core/effects';
import { WeatherService } from '../../services/WeatherService';
import { CityWeatherInfo, GetWeatherInfo } from '../../types';
import { GET_WEATHER_FOR_CITY } from '../actions/types';
import { getWeatherInfoSuccess } from '../actions/weather';

function* getWeather(action: GetWeatherInfo) {
  const weatherInfo: CityWeatherInfo = yield call(
    WeatherService.fetchWeatherInfoForCity,
    action.payload
  );
  yield put(getWeatherInfoSuccess(weatherInfo));
}

export const weatherSagas = [takeLatest(GET_WEATHER_FOR_CITY, getWeather)];
