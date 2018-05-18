/*
 *
 * SubmitRequest actions
 *
 */

import {
  SUBMIT_REQUEST,
  SUBMIT_REQUEST_SUCCESS,
  SUBMIT_REQUEST_ERROR
} from './constants';

export function SubmitRequest() {
  return {
    type: SUBMIT_REQUEST,
  };
}

export function SubmitRequestSuccess() {
  return {
    type: SUBMIT_REQUEST_SUCCESS,
  };
}
export function SubmitRequestError(error) {
  return {
    type: SUBMIT_REQUEST_ERROR,
    error
  };
}