/**
 *
 * TripsList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { 
   makeSelectTripsData,
   makeSelectTripsError, 
   makeSelectTripsLoading 
  }  from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ListItem from 'components/ListItem/';
 

import { fetchTripRequests } from 'containers/TripRequestList/actions';
import { loadTripsList } from './actions';

export class TripsList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function'

  componentDidMount() {
    this.props.loadTrips();
  }

  render() {
    const { data, error, loading } = this.props;
    return loading ? <div> Loading </div> : (error == false ?  <div  >{data.map((trip, index) =>  <ListItem key={index} item={trip} clickEvent={(e) => {this.props.tryLoadRequests(e, trip.id)} }/>)    }</div>: <div>{error.message}</div>) 
  }
}


TripsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType(
    [
      PropTypes.object,
      PropTypes.bool,
    ]
  ),
  data: PropTypes.oneOfType(
    [
      PropTypes.object,
      PropTypes.array,
    ]
  ),
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectTripsData(),
  error: makeSelectTripsError(),
  loading: makeSelectTripsLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadTrips: () => { dispatch(loadTripsList()) },
    tryLoadRequests: (e,id) => {
      event.preventDefault();
      dispatch(fetchTripRequests(id));    
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tripsList', reducer });
const withSaga = injectSaga({ key: 'tripsList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TripsList);
