/*
 *
 * TripRequestList actions
 *
 */

import {
  FETCH_TRIP_REQUESTS,
  FETCH_TRIP_REQUESTS_SUCCESS,
  FETCH_TRIP_REQUESTS_ERROR
} from './constants';

export function fetchTripRequests(id) {
  return {
    type: FETCH_TRIP_REQUESTS,
    id
  };
}

export function fetchTripRequestsSuccess(data) {
  return {
    type: FETCH_TRIP_REQUESTS_SUCCESS,
    data
  };
}

export function fetchTripRequestsError(error) {
  return {
    type: FETCH_TRIP_REQUESTS_ERROR,
    error
  };
}
