import { createSelector } from 'reselect';

/**
 * Direct selector to the tripRequestList state domain
 */
const selectTripRequestListDomain = (state) => state.get('tripRequestList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TripRequestList
 */

const makeSelectTripRequestList = () => createSelector(
  selectTripRequestListDomain,
  (substate) => substate.toJS()
);

export default makeSelectTripRequestList;
export {
  selectTripRequestListDomain,
};
