import { ErrorActionTypes } from '../../types';
import { CLEAR_API_ERROR, HANDLE_API_ERROR } from '../actions/types';

const initialState = {
  message: '',
};

const errorReducer = (state = initialState, action: ErrorActionTypes) => {
  switch (action.type) {
    case HANDLE_API_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAR_API_ERROR:
      return {
        ...state,
        message: '',
      };

    default:
      return state;
  }
};

export default errorReducer;
