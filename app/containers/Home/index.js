/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import Container from 'components/Container';

import messages from './messages';

function Home() {
  return (
    <div>
      <Container>
      <div className='columns'>  
        <div className='column'>  
          Hello everybody
        </div>
      </div>
      </Container>
    </div>
  );
}

Home.propTypes = {
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
)(Home);
