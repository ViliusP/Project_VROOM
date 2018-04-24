/*
 *
 * SubmitTrip actions
 *
 */

import {
  SUBMIT_TRIP,
  SUBMIT_TRIP_SUCCESS,
  SUBMIT_TRIP_ERROR,
  SET_INITIAL_STATE,
} from './constants';

export function submitTrip() {
  return {
    type: SUBMIT_TRIP,
  };
}

export function submitTripSuccess() {
  return {
    type: SUBMIT_TRIP_SUCCESS,
  };
}

export function submitTripError(error) {
  return {
    type: SUBMIT_TRIP_ERROR,
    error,
  };
}

export function setIntitialState()
{
  return {
    type: SET_INITIAL_STATE,
  };
}
