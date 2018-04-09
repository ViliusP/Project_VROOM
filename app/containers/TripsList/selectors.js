import { createSelector } from 'reselect';

/**
 * Direct selector to the tripsList state domain
 */
const selectTripsList = (state) => state.get('tripsList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TripsList
 */

const makeSelectTripsData = () => createSelector(
  selectTripsList,
  (TripsListState) => TripsListState.get('data')
);
const makeSelectTripsError= () => createSelector(
  selectTripsList,
  (TripsListState) => TripsListState.get('error')
);
const makeSelectTripsLoading= () => createSelector(
  selectTripsList,
  (TripsListState) => TripsListState.get('loading')
);



export {
  selectTripsList,
  makeSelectTripsData,
  makeSelectTripsError,
  makeSelectTripsLoading,
};
