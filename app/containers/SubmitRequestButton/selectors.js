import { createSelector } from 'reselect';

/**
 * Direct selector to the submitRequest state domain
 */
const selectSubmitRequestDomain = (state) => state.get('submitRequestButton');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SubmitRequest
 */

const makeSelectSubmitRequest = () => createSelector(
  selectSubmitRequestDomain,
  (substate) => substate.toJS()
);

export default makeSelectSubmitRequest;
export {
  selectSubmitRequestDomain,
};
