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
import Section from 'components/Section';

import messages from './messages';

import SearchTripForm from 'containers/SearchTripForm';
import SearchedTripList from 'containers/SearchedTripList';

export class SearchTrips extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <Section>
      <Container>
        <h1 className="title">Search for trips</h1>
        <h2 className="subtitle">
        Here you can find trip to anywhere
        </h2>
        <SearchTripForm/>
        <hr/>
        <SearchedTripList/>
        </Container>
      </Section>
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
