/**
*
* List
*
*/

import React from 'react';
import propTypes from 'prop-types';
import ListItem from '../ListItem';
// import styled from 'styled-components';
import Wrapper from './Wrapper';

function List() {
  var data = require('./data.json');
  
  return (
    <Wrapper>
        {data.map((data,index)=>  <ListItem key={index} name={data.name} cost={data.cost} space={data.space} startCity={data.startCity} endCity={data.endCity}/>)}
    </Wrapper>
  );
}

List.propTypes = {

};

export default List;
