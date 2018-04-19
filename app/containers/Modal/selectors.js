import { createSelector } from 'reselect';

/**
 * Direct selector to the modal state domain
 */
const selectModalDomain = (state) => state.get('modal');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Modal
 */

const makeSelectModal = () => createSelector(
  selectModalDomain,
  (substate) => substate.toJS()
);

export default makeSelectModal;
export {
  selectModalDomain,
};
