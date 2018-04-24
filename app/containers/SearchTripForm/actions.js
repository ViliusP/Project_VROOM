/*
 *
 * SearchTripForm actions
 *
 */

import {
  CHANGE_CITY_FROM,
  CHANGE_CITY_TO,
  CHANGE_DATE_FROM,
  CHANGE_DATE_TO,
  RESET_FORM
} from './constants';

export function changeCityFrom(city) {
  return {
    type: CHANGE_CITY_FROM,
    city,
  };
}

export function changeCityTo(city) {
  return {
    type: CHANGE_CITY_TO,
    city,
  };
}

export function changeDateFrom(date) {
  return {
    type: CHANGE_DATE_FROM,
    date,
  };
}

export function changeDateTo(date) {
  return {
    type: CHANGE_DATE_TO,
    date,
  };
}

export function resetForm() {
  return {
    type: RESET_FORM,
  };
}