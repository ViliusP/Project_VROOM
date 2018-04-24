import { createSelector } from 'reselect';

/**
 * Direct selector to the searchTripForm state domain
 */
const selectSearchTripFormDomain = (state) => state.get('searchTripForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchTripForm
 */

const makeSelectSearchTripForm = () => createSelector(
  selectSearchTripFormDomain,
  (substate) => substate.toJS()
);


const makeSelectCityTo= () => createSelector(
  selectSearchTripFormDomain,
  (createTripFormState) => createTripFormState.get('CityTo')
);

const makeSelectCityFrom= () => createSelector(
  selectSearchTripFormDomain,
  (createTripFormState) => createTripFormState.get('CityFrom')
);

const makeSelectDateFrom= () => createSelector(
  selectSearchTripFormDomain,
  (createTripFormState) => createTripFormState.get('DateFrom')
);
const makeSelectDateTo= () => createSelector(
  selectSearchTripFormDomain,
  (createTripFormState) => createTripFormState.get('DateTo')
);
export {
  selectSearchTripFormDomain,
  makeSelectCityTo,
  makeSelectCityFrom,
  makeSelectDateFrom,
  makeSelectDateTo
};
