/**
 *
 * SubmitRequest
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
import makeSelectSubmitRequest from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { SubmitRequest } from './actions';
import SearchTripButton from 'components/SearchTripButton';
export class SubmitRequestButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <SearchTripButton clickAction={this.props.tryToSubmit} loading={this.props.submitrequest.loading} error={this.props.submitrequest.error}/>
      </div>
    );
  }
}

SubmitRequest.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  submitrequest : makeSelectSubmitRequest(),
});

function mapDispatchToProps(dispatch) {
  return {
    tryToSubmit: (evt) => 
    {
      if (evt !== undefined && evt.preventDefault) 
        evt.preventDefault();
      dispatch(SubmitRequest());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'submitRequestButton', reducer });
const withSaga = injectSaga({ key: 'submitRequestButton', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SubmitRequestButton);
