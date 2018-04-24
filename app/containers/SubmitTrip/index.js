/**
 *
 * SubmitTrip
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
import {
  makeSelectSubmitError,
  makeSelectSubmitLoading,
  makeSelectSubmitSuccess,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Primary from 'components/Buttons/Primary';
import PrimaryLoading from 'components/Buttons/PrimaryLoading';
import Warning from 'components/Buttons/Warning';
import Success from 'components/Buttons/Success';

import { submitTrip, setIntitialState } from './actions';

export class SubmitTrip extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount()
  {
    this.props.resetState();
  }
  
  render() {
    const { error, loading, success } = this.props;
    if(!loading && !error && !success)
      return(<Primary onClick = {this.props.onSubmitForm}>Submit</Primary>);
    else if(error)
      return(<Warning onClick = {this.props.onSubmitForm}>Try again!</Warning>);
    else if(loading)
      return(<PrimaryLoading>Submit</PrimaryLoading>)
    else if(success)
      return(<Success onClick = {this.props.onSubmitForm}>Done!</Success>)
    else 
      return(<Warning onClick = {this.props.onSubmitForm}>Kažkas ne taip</Warning>);
  }
}

SubmitTrip.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectSubmitError(),
  loading: makeSelectSubmitLoading(),
  success: makeSelectSubmitSuccess(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) 
        evt.preventDefault();
        dispatch(submitTrip()); //Dispatchinti veiksmą reik
    },
    resetState: () => {
      dispatch(setIntitialState());
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'submitTrip', reducer });
const withSaga = injectSaga({ key: 'submitTrip', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SubmitTrip);
