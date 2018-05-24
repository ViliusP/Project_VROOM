/**
*
* ListItemHoc
*
*/

import React from 'react';
// import styled from 'styled-components';
import Wrapper from 'components/ListItem/Wrapper';
import SelectedWrapper from 'components/ListItem/SelectedWrapper';
const ListItemHoc = (Component, isSelected, clickEvent) => {
  if(!isSelected) {
    return (
    <Wrapper onClick={clickEvent}> {Component} </Wrapper> 
    );
  } else {
    return (
    <SelectedWrapper onClick={clickEvent}> {Component} </SelectedWrapper>
  );
  }
}

ListItemHoc.propTypes = {

};

export default ListItemHoc;
