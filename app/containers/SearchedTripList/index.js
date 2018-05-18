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
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import SearchListElement from 'components/SearchListElement';
import { makeSelectData }  from './selectors';

export class SearchedTripList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if(this.props.data)
    {
      return (
          <div>
            {this.props.data.map((x, index) => <SearchListElement key = {index} trip = {x}/>)}
          </div>      
      );
    } else {
        return (<div/>)
    }
  }
}

SearchedTripList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
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
