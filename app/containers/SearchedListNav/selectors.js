import { createSelector } from 'reselect';

/**
 * Direct selector to the searchedListNav state domain
 */
const selectSearchedListNavDomain = (state) => state.get('searchedListNav');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchedListNav
 */

const makeSelectSearchedListNav = () => createSelector(
  selectSearchedListNavDomain,
  (substate) => substate.toJS()
);

export default makeSelectSearchedListNav;
export {
  selectSearchedListNavDomain,
};
