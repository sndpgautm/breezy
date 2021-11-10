import { HANDLE_API_ERROR, CLEAR_API_ERROR } from './types';

export const handleApiError = (errMessage: string) => {
  return {
    type: HANDLE_API_ERROR,
    payload: errMessage,
  };
};

export const clearApiError = () => {
  return {
    type: CLEAR_API_ERROR,
  };
};
