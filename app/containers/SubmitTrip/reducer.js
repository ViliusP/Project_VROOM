/*
 *
 * SubmitTrip reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SUBMIT_TRIP,
  SUBMIT_TRIP_SUCCESS,
  SUBMIT_TRIP_ERROR,
  SET_INITIAL_STATE,
} from './constants';

const initialState = fromJS({
  success: false,
  loading: false,
  error: false,
});

function submitTripReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_TRIP:
      return state
      .set('success', false)
      .set('loading', true)
      .set('error', false);
    case SUBMIT_TRIP_SUCCESS:
      return state
      .set('success', true)
      .set('loading', false)
      .set('error', false);
    case SUBMIT_TRIP_ERROR:
      return state
      .set('success', false)
      .set('loading', false)
      .set('error', action.error);
    case SET_INITIAL_STATE:
      return initialState;
    default:
      return state;
  }
}

export default submitTripReducer;
