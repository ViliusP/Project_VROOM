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
import Item from './Item';
function ListItem(props) {
  const {
    id, 
    city1, 
    city2, 
    city3, 
    city4, 
    city5,
    departure_from,
    departure_to,
    cost,
    space,
    driver
  } = props.item;
  return (
    <Wrapper>
      <p> {driver} </p> 
      <ul>
        <item> <FormattedMessage {...messages.cost} />: {cost} $</item>
        <item> <FormattedMessage {...messages.space} />: {space} </item> 
        <item> <FormattedMessage {...messages.route} />: {city1} - {city5} </item> 
      </ul>
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
