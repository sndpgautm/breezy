import { all } from 'redux-saga/effects';

import { citySagas } from './city';

// Combine all saga actions to root saga
export default function* rootSaga() {
  yield all([...citySagas]);
}
