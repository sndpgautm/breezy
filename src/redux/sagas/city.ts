import { call, put, takeLatest, delay } from '@redux-saga/core/effects';
import { CityService } from '../../services/CityService';
import { City, GetCitiesWithPrefix } from '../../types';
import { getCitiesWithPrefixSuccess } from '../actions/city';
import { handleApiError, clearApiError } from '../actions/error';
import { GET_CITIES_WITH_PREFIX } from '../actions/types';

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

export const citySagas = [takeLatest(GET_CITIES_WITH_PREFIX, getCities)];
