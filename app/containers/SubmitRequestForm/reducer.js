/*
 *
 * SubmitRequestForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_ADDRESS1,
  CHANGE_ADDRESS2,
  CHANGE_INFO,
  RESET,
} from './constants';
import { bindActionCreators } from 'redux';

const initialState = fromJS({
  address1: '',
  address2: '',
  info: ''
});

function submitRequestFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADDRESS1:
      return state
      .set('address1', action.address);
    case CHANGE_ADDRESS2:
      return state
      .set('address2', action.address);
    case CHANGE_INFO:
      return state
      .set('info', action.info);
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default submitRequestFormReducer;
