/**
 *
 * SearchTrips
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import Container from 'components/Container';
import TripsList from 'containers/TripsList/Loadable';

import messages from './messages';

export class SearchTrips extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Container>
          <TripsList/>
        </Container>
      </div>
    );
  }
}

SearchTrips.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(SearchTrips);
