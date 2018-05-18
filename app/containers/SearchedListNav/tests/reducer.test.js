
import { fromJS } from 'immutable';
import searchedListNavReducer from '../reducer';

describe('searchedListNavReducer', () => {
  it('returns the initial state', () => {
    expect(searchedListNavReducer(undefined, {})).toEqual(fromJS({}));
  });
});
