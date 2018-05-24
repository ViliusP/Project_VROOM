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

import RequestManager from 'containers/RequestManager';
import  TripRequestList  from '../TripRequestList';

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
        <div>
          <div className='box'>
            <div className="columns">

              <div className='column'>
                <h3 className="title is-4">Here you can manage your trips</h3>
                <h4 className="subtitle">Press on trip to accept or cancel traveler request to your trip</h4>
              </div>
            
              <div className='column'>
                <RequestManager/>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className='column'>  <TripsList/> </div>
            <div className='column'>  <TripRequestList/> </div>
          </div>
        </div>
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
