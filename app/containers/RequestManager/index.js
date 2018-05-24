/**
 *
 * RequestManager
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
import makeSelectRequestManager from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class RequestManager extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

        <nav className="level is-mobile">
          <div className='level-left'>
            <div className="level-item">
              <p className="subtitle is-5">
                Accepted
              </p>
            </div>
            <div className="level-item">
              <p className="subtitle is-5">
                Pending
              </p>
            </div>
          </div>
          <div className="level-left has-text-centered">
            <div>
            <p className="heading">Free space</p>
            <p className="title">0</p>
            </div>
          </div>      
        </nav>
    );
  }
}

RequestManager.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  requestmanager: makeSelectRequestManager(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'requestManager', reducer });
const withSaga = injectSaga({ key: 'requestManager', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RequestManager);
