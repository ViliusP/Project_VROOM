/*
 *
 * Modal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  OPEN,
  CLOSE
} from './constants';

const initialState = fromJS({
  opened: false,
  content: ''
});

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return state
      .set('opened', true)
      .set('content', action.content);
    case CLOSE:
      return state
      .set('opened', false);
    default:
      return state;
  }
}

export default modalReducer;
