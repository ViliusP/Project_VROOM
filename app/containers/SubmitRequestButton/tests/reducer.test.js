
import { fromJS } from 'immutable';
import submitRequestReducer from '../reducer';

describe('submitRequestReducer', () => {
  it('returns the initial state', () => {
    expect(submitRequestReducer(undefined, {})).toEqual(fromJS({}));
  });
});
