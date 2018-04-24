/*
 *
 * SearchedTripList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEARCH_TRIPS,
  SEARCH_TRIPS_SUCCESS,
  SEARCH_TRIPS_ERROR,
  SET_INITIAL_STATE,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: [],
});

function searchedTripListReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TRIPS:
      return state
      .set('date', [])
      .set('loading', true)
      .set('error', false);
    case SEARCH_TRIPS_SUCCESS:
      return state
      .set('data', action.data)
      .set('loading', false)
      .set('error', false);
    case SEARCH_TRIPS_ERROR:
      return state
      .set('data', [])
      .set('loading', false)
      .set('error', action.error);
    default:
      return state;
  }
}

export default searchedTripListReducer;
