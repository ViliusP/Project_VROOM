/*
 *
 * CreateTripForm actions
 *
 */

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


export function changeCityTo(city) {
  return {
    type: CHANGE_CITY_TO,
    city,
  };
}

export function changeCityFrom(city) {
  return {
    type: CHANGE_CITY_FROM,
    city,
  };
}

export function changeDepartureDate(date) {
  return {
    type: CHANGE_DEPARTURE_DATE,
    date,
  };
}
export function changeTimeFrom(time) {
  return {
    type: CHANGE_TIME_FROM,
    time,
  };
}

export function changeTimeTo(time) {
  return {
    type: CHANGE_TIME_TO,
    time,
  };
}

export function changeSpace(space) {
  return {
    type: CHANGE_SPACE,
    space,
  };
}

export function changeCityPrice(price) {
  return {
    type: CHANGE_PRICE,
    price,
  };
}

export function changeCityInfo(info) {
  return {
    type: CHANGE_INFO,
    info,
  };
}

export function resetForm() {
  return {
    type: RESET_FORM,
  };
}