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

function ListItem(props) {
  return (
    <div>
      <p> {props.name} </p> 
      <ul>
        <li> Kaina: {props.cost} $</li>
        <li> Laisva vieta: {props.space} </li> 
        <li> Maršrutas: {props.startCity} - {props.endCity} </li> 
      </ul>
    </div>
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
