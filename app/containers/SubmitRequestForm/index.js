/**
 *
 * SubmitRequestForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectSubmitRequestForm from './selectors';
import reducer from './reducer';
import messages from './messages';

import SubmitFormButton from 'containers/SubmitRequestButton';

import { ChangeAddress1, ChangeAddress2, ChangeInfo, Reset } from './actions';

import Control from 'components/FormElements/Control';
import Field from 'components/FormElements/Field';
import Label from 'components/FormElements/Label';
import Text from 'components/FormElements/Text';
import Input from 'components/FormElements/Input';
import GroupedField from 'components/FormElements/GroupedField';
import StaticButton from 'components/FormElements/StaticButton';
import Buttons from 'components/Buttons/Buttons';
import Primary from 'components/Buttons/Primary';
import Button from 'components/Buttons/Button';

export class SubmitRequestForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillUnmount()
  {
    this.props.resetForm();    
  }

  render() {
    const id = this.props.tripID;
    const labelAddress1 = 'From';
    const labelAddress2 = 'To';
    const additionalInfo = 'Additional information for driver';


    const placeHolderText = '***************';
    const placeholderAddress1 = "Pick up from";
    const placeholderAddress2 = "Take to";
    return (
      <div>
        <GroupedField>
          <Field>
            <Label>{labelAddress1}</Label>
            <Control>
              <Input placeholder={placeholderAddress1} onChange = {this.props.onChangeAddress1} value = {this.props.submitrequestform.address1}/>
            </Control>
          </Field>

          <Field>
            <Label>{labelAddress2}</Label>
            <Control>
              <Input placeholder={placeholderAddress2} onChange = {this.props.onChangeAddress2} value = {this.props.submitrequestform.address2}/>
            </Control>
          </Field>
        </GroupedField>


        <Field>
          <Label>{additionalInfo}</Label>
          <Control>
            <Text placeholder={placeHolderText} onChange = {this.props.onChangeInfo} value = {this.props.submitrequestform.info}/>
          </Control>
        </Field>

        <Buttons>
          <SubmitFormButton id = {this.props.tripID}/>
          <Button onClick = {this.props.resetForm}>Reset</Button>  
        </Buttons>
      </div>
    );
  }
}

SubmitRequestForm.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  submitrequestform: makeSelectSubmitRequestForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeAddress1: (evt) =>
    {
      dispatch(ChangeAddress1(evt.target.value));
    },
    onChangeAddress2: (evt) =>
    {
      dispatch(ChangeAddress2(evt.target.value));
    },
    onChangeInfo: (evt) =>
    {
      dispatch(ChangeInfo(evt.target.value));
    },
    resetForm: (evt) =>
    {
      dispatch(Reset());
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'submitRequestForm', reducer });

export default compose(
  withReducer,
  withConnect,
)(SubmitRequestForm);
