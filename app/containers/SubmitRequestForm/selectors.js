import { createSelector } from 'reselect';

/**
 * Direct selector to the submitRequestForm state domain
 */
const selectSubmitRequestFormDomain = (state) => state.get('submitRequestForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SubmitRequestForm
 */

const makeSelectSubmitRequestForm = () => createSelector(
  selectSubmitRequestFormDomain,
  (substate) => substate.toJS()
);

export default makeSelectSubmitRequestForm;
export {
  selectSubmitRequestFormDomain,
};
