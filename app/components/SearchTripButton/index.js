/**
*
* SearchTripButton
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Primary from 'components/Buttons/Primary';
import PrimaryLoading from 'components/Buttons/PrimaryLoading';
import Warning from 'components/Buttons/Warning';
import Success from 'components/Buttons/Success';

function SearchTripButton(props) {
  const {loading, error} = props;
  if(!loading && !error)
    return(<Primary onClick = {props.clickAction}>Submit</Primary>);
  else if(error)
    return(<Warning onClick = {props.clickAction}>Try again!</Warning>);
  else if(loading)
    return(<PrimaryLoading>Submit</PrimaryLoading>)
  else 
    return(<Warning onClick = {props.clickAction}>Kažkas ne taip</Warning>);
}

SearchTripButton.propTypes = {

};

export default SearchTripButton;
