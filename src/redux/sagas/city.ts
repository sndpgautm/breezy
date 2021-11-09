import { call, put, takeLatest } from '@redux-saga/core/effects';
import { CityService } from '../../services/CityService';
import { City, GetCitiesWithPrefix } from '../../types';
import { getCitiesWithPrefixSuccess } from '../actions/city';
import { GET_CITIES_WITH_PREFIX } from '../actions/types';

function* getCities(action: GetCitiesWithPrefix) {
  const cities: City[] = yield call(
    CityService.fetchCitiesWithPrefix,
    action.payload
  );
  yield put(getCitiesWithPrefixSuccess(cities));
}

export const citySagas = [takeLatest(GET_CITIES_WITH_PREFIX, getCities)];
