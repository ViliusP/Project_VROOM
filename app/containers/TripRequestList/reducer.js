/*
 *
 * TripRequestList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_TRIP_REQUESTS,
  FETCH_TRIP_REQUESTS_SUCCESS,
  FETCH_TRIP_REQUESTS_ERROR
} from './constants';

const initialState = fromJS({
  loading: false,
  data: [],
  error: false
});

function tripRequestListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRIP_REQUESTS:
      return state
      .set('loading', true)
      .set('error',false)
    case FETCH_TRIP_REQUESTS_SUCCESS:
      return state
      .set('loading', true)
      .set('error',false)
      .set('data', action.data) ;
    case FETCH_TRIP_REQUESTS_ERROR:
      return state
      .set('loading', false)
      .set('error', action.error)
      .set('data', []);;
    default:
      return state;
  }
}

export default tripRequestListReducer;
