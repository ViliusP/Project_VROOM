/*
 *
 * SubmitRequest reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SUBMIT_REQUEST,
  SUBMIT_REQUEST_SUCCESS,
  SUBMIT_REQUEST_ERROR
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false
});

function submitRequestReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_REQUEST:
      return state
      .set('loading', true)
      .set('error', false);
    case SUBMIT_REQUEST_SUCCESS:
      return state
      .set('loading', false)
      .set('error', false);
    case SUBMIT_REQUEST_ERROR:
      return state
      .set('loading', false)
      .set('error', action.error);
    default:
      return state;
  }
}

export default submitRequestReducer;
