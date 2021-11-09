import { combineReducers } from 'redux';

import cityReducer from './city';

const rootReducer = combineReducers({
  cityReducer,
});

export default rootReducer;
