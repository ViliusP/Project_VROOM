/*
 *
 * SubmitTrip reducer
 *
 */

import { fromJS } from 'immutable';
import {
    CHANGE_CITY_FROM,
    CHANGE_CITY_TO,
    CHANGE_DATE_FROM,
    CHANGE_DATE_TO,
    RESET_FORM
} from './constants';

const initialState = fromJS({
  CityFrom: '',
  CityTo: ' ', 
  DateFrom: ' ',
  DateTo: ' ',
});

function SearchedTripListReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CITY_FROM:
        return state
        .set('CityFrom', action.city);
    case CHANGE_CITY_TO:
        return state
        .set('CityTo', action.city);
    case CHANGE_DATE_FROM:
        return state
        .set('DateFrom', action.date);
    case CHANGE_DATE_TO:
        return state
        .set('DateTo', action.date);
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
}

export default SearchedTripListReducer;
