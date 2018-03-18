/**
*
* List
*
*/

import React from 'react';
import propTypes from 'prop-types';
import ListItem from '../ListItem';
// import styled from 'styled-components';


function List() {
  var data = require('./data.json');
  
  return (
    <div>
        {data.map((data,index)=>  <ListItem key={index} name={data.name} cost={data.cost} space={data.space} startCity={data.startCity} endCity={data.endCity}/>)};
    </div>
  );
}

List.propTypes = {

};

export default List;
