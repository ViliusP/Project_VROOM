/**
 *
 * ManageTrips
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Container from 'components/Container';
import CreateTripForm from 'containers/CreateTripForm';
import TripsList from 'containers/TripsList/Loadable';

import Section from 'components/Section';


function ManageTrips() {
  return (
    <div>
      <Section>
      <Container>
        <h1 className="title">Create trip</h1>
        <h2 className="subtitle">
        Choose information about your trip and press "Submit" to create new trip
        </h2>
        <CreateTripForm/>
        <hr/>
        <TripsList/>
        <hr/>
        </Container>
      </Section>
    </div>
  );
}

ManageTrips.propTypes = {
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
)(ManageTrips);
