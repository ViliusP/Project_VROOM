/**
 *
 * CreateTripForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { 
  makeSelectCityFrom,
  makeSelectCityTo,
  makeSelectDepartureDate,
  makeSelectSpace,
  makeSelectPrice,
  makeSelectInfo,
 } from './selectors';
import reducer from './reducer';
import messages from './messages';

import Control from 'components/FormElements/Control';
import Field from 'components/FormElements/Field';
import Label from 'components/FormElements/Label';
import Select from 'components/FormElements/Select';
import Text from 'components/FormElements/Text';
import Input from 'components/FormElements/Input';
import GroupedField from 'components/FormElements/GroupedField';
import StaticButton from 'components/FormElements/StaticButton';
import FieldWithAddons from 'components/FormElements/FieldWithAddons';

import Buttons from 'components/Buttons/Buttons';
import Button from 'components/Buttons/Button';

import Container from 'components/Container';

import SubmitTrip from 'containers/SubmitTrip'; 

import { 
  changeCityTo,
  changeCityFrom,
  changeDepartureDate,
  changeSpace,
  changeCityPrice,
  changeCityInfo,
  resetForm,
} from './actions';

export class CreateTripForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const labelText = "Additional information";
    const labelTripDate = "Trip date";
    const labelTripFrom = "Time from";
    const labelTripTo = "Time to";
    const labelFrom = "From";
    const labelTo = "To";
    const labelPrice = "Price per person";
    const labelSpace = "Free space";

    const placeHolderDate= "2018-12-04";
    const placeHolderText = "e.g. Hello World!";
    const placeholderCityFrom = "Kaunas";
    const placeholderCityTo = "Tauragė";
    const placeholderPrice = "5";
    const placeholderSpace = "3";

    const userID = 3;
    return (
      <div>
          <GroupedField>
            <Field>
              <Label>{labelFrom}</Label>
              <Control>
                <Input placeholder={placeholderCityFrom} value={this.props.CityFrom} onChange = {this.props.onChangeCityFrom}/>
              </Control>
            </Field>
        
            <Field>
              <Label>{labelTo}</Label>
              <Control>
                <Input placeholder={placeholderCityTo}  value={this.props.CityTo} onChange = {this.props.onChangeCityTo}/>
              </Control>
            </Field>
          </GroupedField>

          <GroupedField>
            <Field>
              <Label>{labelTripDate}</Label>
              <Control>
                <Input placeholder={placeHolderDate} value={this.props.DepartureDate} onChange = {this.props.onChangeDepartureDate}/>
              </Control>
            </Field>
          </GroupedField>

          <GroupedField>
          <Field>
            <Label>{labelSpace}</Label>
            <Control>
              <Input placeholder={placeholderSpace} value={this.props.Space} onChange = {this.props.onChangeSpace}/>
            </Control>
          </Field>
          </GroupedField>

          <Field>
          <Label>{labelPrice}</Label>
            <FieldWithAddons>
              <Control>
                <Input placeholder={placeholderPrice} value={this.props.Price} onChange = {this.props.onChangePrice}/>
              </Control>
              <Control>
                <StaticButton>€</StaticButton>
              </Control>
            </FieldWithAddons>
          </Field>

          <Field>
            <Label>{labelText}</Label>
            <Control>
              <Text placeholder={placeHolderText} value={this.props.Info} onChange = {this.props.onChangeInfo}/>
            </Control>
          </Field>

          <Buttons>
            <SubmitTrip/>
            <Button onClick = {this.props.onResetForm}>Reset</Button>  
          </Buttons>
      </div>
    );
  }
}

CreateTripForm.propTypes = {
  onResetForm: PropTypes.func,
  onChangeCityFrom: PropTypes.func,
  onChangeCityTo: PropTypes.func,
  onChangeDepartureDate: PropTypes.func,
  onChangeSpace: PropTypes.func,
  onChangePrice: PropTypes.func,
  onChangeInfo: PropTypes.func,
  CityFrom: PropTypes.string,
  CityTo: PropTypes.string,
  DepartureDate: PropTypes.string,
  Space: PropTypes.string,
  Price: PropTypes.string,
  Info: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  CityTo: makeSelectCityTo(),
  CityFrom: makeSelectCityFrom(),
  DepartureDate: makeSelectDepartureDate(),
  Space: makeSelectSpace(),
  Price: makeSelectPrice(),
  Info: makeSelectInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeCityFrom: (evt) => {dispatch(changeCityFrom(evt.target.value));},
    onChangeCityTo: (evt) => {dispatch(changeCityTo(evt.target.value));},
    onChangeDepartureDate: (evt) => {dispatch(changeDepartureDate(evt.target.value));},
    onChangeSpace: (evt) => {dispatch(changeSpace(evt.target.value));},
    onChangePrice: (evt) => {dispatch(changeCityPrice(evt.target.value));},
    onChangeInfo: (evt) => {dispatch(changeCityInfo(evt.target.value));},
    onResetForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) 
        evt.preventDefault();
      dispatch(resetForm());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'createTripForm', reducer });


export default compose(
  withReducer,
  withConnect,
)(CreateTripForm);
