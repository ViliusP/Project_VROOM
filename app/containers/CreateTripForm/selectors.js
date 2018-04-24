import { createSelector } from 'reselect';

/**
 * Direct selector to the createTripForm state domain
 */
const selectCreateTripForm = (state) => state.get('createTripForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CreateTripForm
 */

const makeSelectCityTo= () => createSelector(
  selectCreateTripForm,
  (createTripFormState) => createTripFormState.get('CityTo')
);

const makeSelectCityFrom= () => createSelector(
  selectCreateTripForm,
  (createTripFormState) => createTripFormState.get('CityFrom')
);

const makeSelectDepartureDate= () => createSelector(
  selectCreateTripForm,
  (createTripFormState) => createTripFormState.get('DepartureDate')
);

const makeSelectTimeFrom= () => createSelector(
  selectCreateTripForm,
  (createTripFormState) => createTripFormState.get('TimeFrom')
);

const makeSelectTimeTo= () => createSelector(
  selectCreateTripForm,
  (createTripFormState) => createTripFormState.get('TimeTo')
);

const makeSelectSpace= () => createSelector(
  selectCreateTripForm,
  (createTripFormState) => createTripFormState.get('Space')
);

const makeSelectPrice= () => createSelector(
  selectCreateTripForm,
  (createTripFormState) => createTripFormState.get('Price')
);

const makeSelectInfo= () => createSelector(
  selectCreateTripForm,
  (createTripFormState) => createTripFormState.get('Info')
);

export {
  selectCreateTripForm,
  makeSelectCityTo,
  makeSelectCityFrom,
  makeSelectDepartureDate,
  makeSelectTimeFrom,
  makeSelectTimeTo,
  makeSelectSpace,
  makeSelectPrice,
  makeSelectInfo,
};
