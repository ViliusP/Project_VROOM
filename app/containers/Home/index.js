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
import Modal from 'containers/Modal/';

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
      <Modal modalButton='Open Modal' modalContent={<form><input className="input is-large" type="email" placeholder="Your Email" autofocus=""/><input className="input is-large" type="password" placeholder="Your Password"/><button class="button is-block is-info is-large is-fullwidth">Login</button></form>}/>
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
