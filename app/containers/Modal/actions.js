/*
 *
 * Modal actions
 *
 */

import {
  CLOSE,
  OPEN
} from './constants';

export function open(content) {
  return {
    type: OPEN,
    content
  };
}

export function close()
{
  return { 
    type: CLOSE,
  };
}
