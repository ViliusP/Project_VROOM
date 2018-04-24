import { createSelector } from 'reselect';

/**
 * Direct selector to the submitTrip state domain
 */
const selectSubmitTripDomain = (state) => state.get('submitTrip');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SubmitTrip
 */

const makeSelectSubmitTrip = () => createSelector(
  selectSubmitTripDomain,
  (substate) => substate.toJS()
);

const makeSelectSubmitError = () => createSelector(
  selectSubmitTripDomain, 
  (substate) => substate.get('error')
);

const makeSelectSubmitLoading = () => createSelector(
  selectSubmitTripDomain, 
  (substate) => substate.get('loading')
);

const makeSelectSubmitSuccess= () => createSelector(
  selectSubmitTripDomain, 
  (substate) => substate.get('success')
);



export default makeSelectSubmitTrip;
export {
  selectSubmitTripDomain,
  makeSelectSubmitError,
  makeSelectSubmitSuccess,
  makeSelectSubmitLoading,
};
