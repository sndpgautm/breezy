import { call, put, takeLatest, delay, select } from '@redux-saga/core/effects';
import { CityService } from '../../services/CityService';
import { City, GetCitiesWithPrefix, RootState } from '../../types';
import { getCitiesWithPrefixSuccess } from '../actions/city';
import { handleApiError, clearApiError } from '../actions/error';
import {
  ADD_CITY_AS_FAV,
  GET_CITIES_WITH_PREFIX,
  REMOVE_CITY_FROM_FAV,
} from '../actions/types';

function* getCities(action: GetCitiesWithPrefix) {
  try {
    const cities: City[] = yield call(
      CityService.fetchCitiesWithPrefix,
      action.payload
    );
    yield put(getCitiesWithPrefixSuccess(cities));
  } catch (error: any) {
    yield put(handleApiError(error.response.data.message));
    yield delay(3000);
    yield put(clearApiError());
  }
}
function* updateLocalStorage() {
  const favCities: City[] = yield select(
    (state: RootState) => state.cityReducer.favCities
  );
  yield window.localStorage.setItem('favCities', JSON.stringify(favCities));
}

export const citySagas = [
  takeLatest(GET_CITIES_WITH_PREFIX, getCities),
  takeLatest(ADD_CITY_AS_FAV, updateLocalStorage),
  takeLatest(REMOVE_CITY_FROM_FAV, updateLocalStorage),
];
