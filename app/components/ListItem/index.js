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
  return (
    <Wrapper>
      <p> {props.name} </p> 
      <ul>
        <item> <FormattedMessage {...messages.cost} />: {props.cost} $</item>
        <item> <FormattedMessage {...messages.space} />: {props.space} </item> 
        <item> <FormattedMessage {...messages.route} />: {props.startCity} - {props.endCity} </item> 
      </ul>
      </Wrapper>
  );
}

ListItem.propTypes = {
  name: propTypes.string,
  cost: propTypes.number,
  space: propTypes.string,
  startCity: propTypes.string,
  endCity: propTypes.string
};

ListItem.default

export default ListItem;
