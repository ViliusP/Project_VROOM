/**
 *
 * SearchedTripList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSearchedTripList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import SearchListElement from '../../components/SearchListElement';


export class SearchedTripList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.searchedtriplist)
      return (
      <SearchListElement/>
    );
  }
}

SearchedTripList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchedtriplist: makeSelectSearchedTripList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchedTripList', reducer });
const withSaga = injectSaga({ key: 'searchedTripList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchedTripList);
