
import { fromJS } from 'immutable';
import searchedTripListReducer from '../reducer';

describe('searchedTripListReducer', () => {
  it('returns the initial state', () => {
    expect(searchedTripListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
