
import { fromJS } from 'immutable';
import createTripFormReducer from '../reducer';

describe('createTripFormReducer', () => {
  it('returns the initial state', () => {
    expect(createTripFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
