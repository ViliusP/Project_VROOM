/**
 *
 * SearchTripForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import messages from './messages';

import {
  makeSelectCityFrom,
  makeSelectCityTo,
  makeSelectDateFrom,
  makeSelectDateTo
} from './selectors';

import {
  changeCityFrom,
  changeCityTo,
  changeDateFrom,
  changeDateTo,
  resetForm
} from './actions';

import { 
  searchTrips
} from 'containers/SearchedTripList/actions';

import SearchTripButton from 'components/SearchTripButton';

import Buttons from 'components/Buttons/Buttons';
import Button from 'components/Buttons/Button';

import Control from 'components/FormElements/Control';
import Field from 'components/FormElements/Field';
import Label from 'components/FormElements/Label';
import Text from 'components/FormElements/Text';
import Input from 'components/FormElements/Input';
import GroupedField from 'components/FormElements/GroupedField';
import StaticButton from 'components/FormElements/StaticButton';

import { makeSelectSearchedTripList } from 'containers/SearchedTripList/selectors';


export class SearchTripForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const placeholderCityFrom = 'City from, e.g. Tauragė';
    const placeholderCityTo = "'City to, e.g. 'Kaunas.'";
    const placeholderDateFrom = '2018-03-30T20:00:00.861Z';
    const placeholderDateTo = '2018-03-30T21:00:00.861Z';

    const labelFrom = 'From';
    const labelTo = 'To';
    const labelDateFrom = 'Date from';
    const labelDateTo = 'Date to';
    return (
      <div>          
      <GroupedField>
        <Field>
          <Label>{labelFrom}</Label>
          <Control>
            <Input placeholder={placeholderCityFrom} value = {this.props.CityFrom} onChange = {this.props.onChangeCityFrom}/>
          </Control>
        </Field>
    
        <Field>
          <Label>{labelTo}</Label>
          <Control>
            <Input placeholder={placeholderCityTo} value={this.props.CityTo} onChange = {this.props.onChangeCityTo}/>
          </Control>
        </Field>
      </GroupedField>

        <GroupedField>
          <Field>
            <Label>{labelDateFrom}</Label>
            <Control>
              <Input placeholder={placeholderDateFrom}  value = {this.props.DateFrom} onChange = {this.props.onChangeDateFrom}/>
            </Control>
          </Field>

          <Field>
            <Label>{labelDateTo}</Label>
            <Control>
              <Input placeholder={placeholderDateTo} value = {this.props.DateTo} onChange = {this.props.onChangeDateTo}/>
            </Control>
          </Field>
        </GroupedField>
        
        <Buttons>
          <SearchTripButton clickAction = {this.props.submitForm} loading = {false} error ={false} /> 
          <Button onClick = {this.props.onResetForm}>Reset</Button>  
        </Buttons>
      </div>
    );
  }
}

SearchTripForm.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  CityFrom: makeSelectCityFrom(),
  CityTo: makeSelectCityTo(),
  DateFrom: makeSelectDateFrom(),
  DateTo: makeSelectDateTo(),
});

function mapDispatchToProps(dispatch) {
  return{ 
    onChangeCityFrom: (evt) => {dispatch(changeCityFrom(evt.target.value));},
    onChangeCityTo: (evt) => {dispatch(changeCityTo(evt.target.value));},
    onChangeDateFrom: (evt) => {dispatch(changeDateFrom(evt.target.value));},
    onChangeDateTo: (evt) => {dispatch(changeDateTo(evt.target.value));},
    onResetForm: () => {dispatch(resetForm());},
    submitForm: () => {dispatch(searchTrips())}
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchTripForm', reducer });

export default compose(
  withReducer,
  withConnect,
)(SearchTripForm);
