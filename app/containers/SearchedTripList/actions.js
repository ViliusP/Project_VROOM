/*
 *
 * SearchedTripList actions
 *
 */

import {
  SEARCH_TRIPS,
  SEARCH_TRIPS_SUCCESS,
  SEARCH_TRIPS_ERROR,
  SET_INITIAL_STATE,
} from './constants';

export function searchTrips() {
  return {
    type: SEARCH_TRIPS,
  };
}

export function searchTripsSuccess(data) {
  return {
    type: SEARCH_TRIPS_SUCCESS,
    data
  };
}
export function searchTripsError(error) {
  return {
    type: SEARCH_TRIPS_ERROR,
    error
  };
}
export function setInitialState() {
  return {
    type: SET_INITIAL_STATE,
  };
}