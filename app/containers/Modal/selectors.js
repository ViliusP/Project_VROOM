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

const makeSelectOpened = () => createSelector(
  selectModalDomain,
  (modalState) => modalState.get('opened')
);


const makeSelectContent = () => createSelector(
  selectModalDomain,
  (modalState) => modalState.get('content')
);

export {
  selectModalDomain,
  makeSelectOpened,
  makeSelectContent
};
