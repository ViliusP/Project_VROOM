/*
 *
 * SubmitRequestForm actions
 *
 */

import {
  CHANGE_ADDRESS1,
  CHANGE_ADDRESS2,
  CHANGE_INFO,
  RESET,
} from './constants';

export function ChangeAddress1(address) {
  return {
    type: CHANGE_ADDRESS1,
    address
  };
}

export function ChangeAddress2(address) {
  return {
    type: CHANGE_ADDRESS2,
    address
  };
}

export function ChangeInfo(info) {
  return {
    type: CHANGE_INFO,
    info
  };
}

export function Reset() {
  return {
    type: RESET,
  };
}