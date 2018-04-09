
import { fromJS } from 'immutable';
import tripsListReducer from '../reducer';

describe('tripsListReducer', () => {
  it('returns the initial state', () => {
    expect(tripsListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
