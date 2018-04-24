import { createSelector } from 'reselect';

/**
 * Direct selector to the searchedTripList state domain
 */
const selectSearchedTripListDomain = (state) => state.get('searchedTripList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchedTripList
 */

const makeSelectSearchedTripList = () => createSelector(
  selectSearchedTripListDomain,
  (substate) => substate.toJS()
);

export default makeSelectSearchedTripList;
export {
  selectSearchedTripListDomain,
};
