
import { fromJS } from 'immutable';
import submitRequestFormReducer from '../reducer';

describe('submitRequestFormReducer', () => {
  it('returns the initial state', () => {
    expect(submitRequestFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
