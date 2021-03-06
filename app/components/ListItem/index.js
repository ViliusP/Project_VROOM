/**
*
* ListItem
*
*/

import React from 'react';
// import styled from 'styled-components';

import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from './Wrapper';
function ListItem(props) {
  const { city, departure_date, cost, space, info } = props.item;

  const cityList = (length) =>
  {
    return city.map((citi, index) => 
    {
      if(index < length-1)
      return citi + "-";
      else return citi;
    });
  } 
  return (
      <div>
        <div><FormattedMessage {...messages.route} />: {cityList(city.length)} </div>
        <div> <FormattedMessage {...messages.cost} />: {cost} </div>
        <div><FormattedMessage {...messages.space} />: {space} </div>
        <div><FormattedMessage {...messages.date} />: {departure_date} </div>
        <div><FormattedMessage {...messages.info} />: {info} </div>
      </div>
  );
}

ListItem.propTypes = {
};

ListItem.default

export default ListItem;
