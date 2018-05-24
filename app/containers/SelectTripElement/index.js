/**
 *
 * SelectTripElement
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
import makeSelectSelectTripElement from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchTripRequests } from 'containers/TripRequestList/actions';

import { makeSelectTrip } from './selectors';
import ListItem from 'components/ListItem';
import ListItemHOC from 'components/ListItemHOC';
import { selectTrip } from './actions';
export class SelectTripElement extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    var isSelected = false;
    if(this.props.selectedTrip == this.props.item.id)
      isSelected = true;
    const component =  <ListItem item={this.props.item}/>;
    const changeComponent = ListItemHOC(component, isSelected, (e) => {this.props.tryLoadRequests(e, this.props.item.id)});
    return (
      <div>
        {changeComponent}
      </div>
    );
  }
}

SelectTripElement.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  selecttripelement: makeSelectSelectTripElement(),
  selectedTrip: makeSelectTrip()
});

function mapDispatchToProps(dispatch) {
  return {
    tryLoadRequests: (e,id) => {
      event.preventDefault();
      dispatch(selectTrip(id));
      dispatch(fetchTripRequests(id));    
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'selectTripElement', reducer });
const withSaga = injectSaga({ key: 'selectTripElement', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SelectTripElement);
