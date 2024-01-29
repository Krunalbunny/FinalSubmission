// asyncReducer.js

import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from '../actions/action-types/asyncActionTypes';
  
  const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_DATA_SUCCESS:
        return { ...state, loading: false, items: action.payload, error: null };
      case FETCH_DATA_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default asyncReducer;
  