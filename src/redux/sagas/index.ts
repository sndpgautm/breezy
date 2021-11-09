import { all } from 'redux-saga/effects';

import { citySagas } from './city';
import { weatherSagas } from './weather';

// Combine all saga actions to root saga
export default function* rootSaga() {
  yield all([...citySagas, ...weatherSagas]);
}
