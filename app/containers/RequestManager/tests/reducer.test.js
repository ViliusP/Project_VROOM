
import { fromJS } from 'immutable';
import requestManagerReducer from '../reducer';

describe('requestManagerReducer', () => {
  it('returns the initial state', () => {
    expect(requestManagerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
