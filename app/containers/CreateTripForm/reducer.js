/*
 *
 * CreateTripForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_CITY_TO,
  CHANGE_CITY_FROM,
  CHANGE_DEPARTURE_DATE,
  CHANGE_TIME_FROM,
  CHANGE_TIME_TO,
  CHANGE_SPACE,
  CHANGE_PRICE,
  CHANGE_INFO,
  RESET_FORM,
} from './constants';

const initialState = fromJS({
  CityTo: '',
  CityFrom: '',
  DepartureDate: '',
  TimeFrom: '',
  TimeTo: '',
  Space: '',
  Price: '',
  Info: ' ',
});

function createTripFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CITY_TO:
      return state
      .set('CityTo', action.city);
    case CHANGE_CITY_FROM:
      return state
      .set('CityFrom', action.city);
    case CHANGE_DEPARTURE_DATE:
      return state
      .set('DepartureDate', action.date);
    case CHANGE_TIME_FROM:
      return state
      .set('TimeFrom', action.time);
    case CHANGE_TIME_TO:
      return state
      .set('TimeTo', action.time);
    case CHANGE_SPACE:
      return state
      .set('Space', action.space);
    case CHANGE_PRICE:
      return state
      .set('Price', action.price);
    case CHANGE_INFO:
      return state
      .set('Info', action.info);
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
}

export default createTripFormReducer;
