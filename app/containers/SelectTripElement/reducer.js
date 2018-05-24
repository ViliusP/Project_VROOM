/*
 *
 * SelectTripElement reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SELECT_TRIP,
} from './constants';

const initialState = fromJS({
  selectedTrip: null
});

function selectTripElementReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_TRIP:
      return state
      .set('selectedTrip', action.id);
    default:
      return state;
  }
}

export default selectTripElementReducer;
