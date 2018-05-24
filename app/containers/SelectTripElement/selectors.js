import { createSelector } from 'reselect';

/**
 * Direct selector to the selectTripElement state domain
 */
const selectSelectTripElementDomain = (state) => state.get('selectTripElement');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SelectTripElement
 */

const makeSelectSelectTripElement = () => createSelector(
  selectSelectTripElementDomain,
  (substate) => substate.toJS()
);

const makeSelectTrip = () => createSelector(
  selectSelectTripElementDomain,
  (substate) => substate.get('selectedTrip')
);


export default makeSelectSelectTripElement;
export {
  selectSelectTripElementDomain,
  makeSelectTrip
};
