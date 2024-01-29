// asyncActions.js

import axios from 'axios';

// Action types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action creators
const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
const fetchDataSuccess = (items) => ({ type: FETCH_DATA_SUCCESS, payload: items });
const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

// Async action using Thunk
export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const items = response.data;
        dispatch(fetchDataSuccess(items));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
