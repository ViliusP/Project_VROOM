/**
*
* SearchListElement
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import MediaArticle from '../MediaObject/MediaArticle';
import MediaLeft from '../MediaObject/MediaLeft';
import Image64x64 from '../MediaObject/Image64x64';
import MediaContent from '../MediaObject/MediaContent';
import Content from '../MediaObject/Content';

function SearchListElement(props) {
  return (
    <MediaArticle>
      <MediaLeft>
        <Image64x64>
          <img src="https://bulma.io/images/placeholders/128x128.png"/>
        </Image64x64>
      </MediaLeft>
      <MediaContent>
        <Content>
        <p>
        <strong>Name Surname</strong> <small>@nickname</small> <small>XX min</small>
        <br/>
        City1 - City5
        <br/>
        DateFrom - DateTo
        <br/>
        Space:
        <br/>
        Cost:
        <br/>
        Additional information: 
        
        </p>
        </Content>
      </MediaContent>
    </MediaArticle>
  );
}

SearchListElement.propTypes = {

};

export default SearchListElement;
