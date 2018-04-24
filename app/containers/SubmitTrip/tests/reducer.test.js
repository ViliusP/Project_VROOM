
import { fromJS } from 'immutable';
import submitTripReducer from '../reducer';

describe('submitTripReducer', () => {
  it('returns the initial state', () => {
    expect(submitTripReducer(undefined, {})).toEqual(fromJS({}));
  });
});
