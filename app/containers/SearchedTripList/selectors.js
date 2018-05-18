import { createSelector } from 'reselect';
/**
 * Direct selector to the searchedTripList state domain
 */
const selectListState = (state) => state.get('searchedTripList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchedTripList
 */
const makeSelectSearchedTripList = () => createSelector(
  selectListState,
  (substate) => substate.toJS()
);


const makeSelectLoading = () => createSelector(
  selectListState,
  (substate) => substate.get('loading')
);

const makeSelectData = () => createSelector(
  selectListState,
  (substate) => substate.get('data')
);

export {
  selectListState,
  makeSelectSearchedTripList,
  makeSelectData,
  makeSelectLoading,
  makeSelectError
};
