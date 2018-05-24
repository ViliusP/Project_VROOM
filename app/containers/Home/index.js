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

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHandPeace } from '@fortawesome/fontawesome-free-solid';

import RequestManager from 'containers/RequestManager';

function Home() {
  var style = 
  {
    color: 'pink',
    padding: '0px 10px'
  }
  return (
    <div>
      <Container>
        <div className='columns'>  
          <div className='column'>  
          <FontAwesomeIcon icon={faHandPeace} size='10x'  spin style={style}/>
          <FontAwesomeIcon icon={faHandPeace} size='10x'  spin style={style}/>
          <FontAwesomeIcon icon={faHandPeace} size='10x'  spin style={style}/>
          <FontAwesomeIcon icon={faHandPeace} size='10x'  spin style={style}/>
          <FontAwesomeIcon icon={faHandPeace} size='10x'  spin style={style}/>
          <FontAwesomeIcon icon={faHandPeace} size='10x'  spin style={style}/>
          <FontAwesomeIcon icon={faHandPeace} size='10x'  spin style={style}/>
          <FontAwesomeIcon icon={faHandPeace} size='10x'  spin style={style}/>
          <FontAwesomeIcon icon={faHandPeace} size='10x'  spin style={style}/>
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
