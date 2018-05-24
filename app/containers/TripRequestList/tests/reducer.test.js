
import { fromJS } from 'immutable';
import tripRequestListReducer from '../reducer';

describe('tripRequestListReducer', () => {
  it('returns the initial state', () => {
    expect(tripRequestListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
