import { createSelector } from 'reselect';

/**
 * Direct selector to the requestManager state domain
 */
const selectRequestManagerDomain = (state) => state.get('requestManager');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RequestManager
 */

const makeSelectRequestManager = () => createSelector(
  selectRequestManagerDomain,
  (substate) => substate.toJS()
);

export default makeSelectRequestManager;
export {
  selectRequestManagerDomain,
};
