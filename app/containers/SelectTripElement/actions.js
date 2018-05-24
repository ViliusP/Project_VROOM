/*
 *
 * SelectTripElement actions
 *
 */

import {
  SELECT_TRIP,
} from './constants';

export function selectTrip(id) {
  return {
    type: SELECT_TRIP,
    id
  };
}
