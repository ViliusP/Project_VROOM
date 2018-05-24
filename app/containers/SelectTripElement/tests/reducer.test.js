
import { fromJS } from 'immutable';
import selectTripElementReducer from '../reducer';

describe('selectTripElementReducer', () => {
  it('returns the initial state', () => {
    expect(selectTripElementReducer(undefined, {})).toEqual(fromJS({}));
  });
});
