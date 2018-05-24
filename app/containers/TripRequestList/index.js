/**
 *
 * TripRequestList
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
import makeSelectTripRequestList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { makeSelectTrip } from 'containers/SelectTripElement/selectors';

import RequestCardItem from 'components/RequestCardItem';
import { request } from 'https';
export class TripRequestList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { loading,
      error,
      data
     } = this.props.triprequestlist;
    var EmptyMessage = '';

    if(this.props.selectedTrip === null) 
      EmptyMessage = 'Please select trip';
    else if(data.length <= 0)
      EmptyMessage = 'There is no requests for chosen trip';
  
    return (
      <div>
     {data ? data.map((request) => <RequestCardItem key={request.id}/> ) : {error}}
     {EmptyMessage}
      </div>
    );
  }
}

TripRequestList.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  triprequestlist: makeSelectTripRequestList(),
  selectedTrip: makeSelectTrip()
});

function mapDispatchToProps1 (dispatch) {
  return {
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps1);

const withReducer = injectReducer({ key: 'tripRequestList', reducer });
const withSaga = injectSaga({ key: 'tripRequestList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TripRequestList);
