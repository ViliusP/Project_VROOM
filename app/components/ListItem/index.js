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
  const { city, departure_time_from, departure_time_to, cost, space, info } = props.item;

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
    <Wrapper>
      <div><FormattedMessage {...messages.route} />: {cityList(city.length)} </div>
      <div> <FormattedMessage {...messages.cost} />: {cost} </div>
      <div><FormattedMessage {...messages.space} />: {space} </div>
      <div><FormattedMessage {...messages.date} />: {departure_time_from} </div>
      <div><FormattedMessage {...messages.time} />: {departure_time_from} - {departure_time_to}  </div>
      <div><FormattedMessage {...messages.info} />: {info} </div>
     </Wrapper>
  );
}

ListItem.propTypes = {
 /* trip: propTypes.shape({
    cost: propTypes.string,
    space: propTypes.string,
    startCity: propTypes.string,
    endCity: propTypes.string,
    name: propTypes.string,
  })*/
};

ListItem.default

export default ListItem;
