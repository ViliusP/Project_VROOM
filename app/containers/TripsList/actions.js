/*
 *
 * TripsList actions
 *
 */

import {
  LOAD_TRIPS_LIST,
  LOAD_TRIPS_LIST_SUCCESS,
  LOAD_TRIPS_LIST_ERROR,
} from './constants';

export function loadTripsList() {
  return {
    type: LOAD_TRIPS_LIST,
  }
}
export function tripsListLoaded(trips) {
  return { 
    type: LOAD_TRIPS_LIST_SUCCESS,
    trips,
  }
}

export function tripsListLoadingError(error) {
  return {
    type: LOAD_TRIPS_LIST_ERROR,
    error,
  };
}
