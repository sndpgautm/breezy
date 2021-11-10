import { call, put, takeLatest, delay } from '@redux-saga/core/effects';
import { WeatherService } from '../../services/WeatherService';
import { CityWeatherInfo, GetWeatherInfo } from '../../types';
import { clearApiError, handleApiError } from '../actions/error';
import { GET_WEATHER_FOR_CITY } from '../actions/types';
import { getWeatherInfoSuccess } from '../actions/weather';

function* getWeather(action: GetWeatherInfo) {
  try {
    const weatherInfo: CityWeatherInfo = yield call(
      WeatherService.fetchWeatherInfoForCity,
      action.payload.cityName,
      action.payload.countryCode
    );
    yield put(getWeatherInfoSuccess(weatherInfo));
  } catch (error: any) {
    yield put(handleApiError(error.response.data.message));
    yield delay(3000);
    yield put(clearApiError());
  }
}

export const weatherSagas = [takeLatest(GET_WEATHER_FOR_CITY, getWeather)];
