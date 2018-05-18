/**
 *
 * SearchedListNav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectSearchedListNav from './selectors';
import reducer from './reducer';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCar, faAmbulance, faSpinner} from '@fortawesome/fontawesome-free-solid';

import { open } from 'containers/Modal/actions';
import SubmitRequestForm from 'containers/SubmitRequestForm';

export class SearchedListNav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let content = <SubmitRequestForm tripID = {this.props.tripID}/>
    return (
        <div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className='icon'>
                    <FontAwesomeIcon icon={faCar} size = 'lg' onClick = {() => {this.props.OpenModal(content)}}/>
                  </span>
                </a>
                <a className="level-item">
                  <span className='icon'>
                    <FontAwesomeIcon icon={faAmbulance} size = 'lg'/>
                  </span>
                </a>
                <a className="level-item">
                  <span className='icon'>
                    <FontAwesomeIcon icon={faSpinner} size = 'lg'/>
                  </span>
                </a>
              </div>
            </nav>
        </div>
    );
  }
}

SearchedListNav.propTypes = {
  
};

const mapStateToProps = createStructuredSelector({
  searchedlistnav: makeSelectSearchedListNav(),
});

function mapDispatchToProps(dispatch) {
  return {
    OpenModal : (content) => 
    {
      dispatch(open(content)) ;
    },
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchedListNav', reducer });

export default compose(
  withReducer,
  withConnect,
)(SearchedListNav);
