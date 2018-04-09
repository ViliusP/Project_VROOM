/*
 *
 * TripsList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_TRIPS_LIST,
  LOAD_TRIPS_LIST_SUCCESS,
  LOAD_TRIPS_LIST_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: [],
})

function tripsListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TRIPS_LIST:
      return state
      .set('loading', true)
      .set('error',false)
    case LOAD_TRIPS_LIST_SUCCESS:
      return state
      .set('data', action.trips)
      .set('error', false)
      .set('loading', false);
    case LOAD_TRIPS_LIST_ERROR:
      return state
      .set('error', action.error)
      .set('loading', false);
    default:
      return state;
  }
}

export default tripsListReducer;
