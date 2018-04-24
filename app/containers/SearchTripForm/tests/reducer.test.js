
import { fromJS } from 'immutable';
import searchTripFormReducer from '../reducer';

describe('searchTripFormReducer', () => {
  it('returns the initial state', () => {
    expect(searchTripFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
