/**
*
* SearchListElement is used for mapping every trip
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import MediaArticle from '../MediaObject/MediaArticle';
import MediaLeft from '../MediaObject/MediaLeft';
import MediaRight from '../MediaObject/MediaRight';
import Image48x48 from '../MediaObject/Image48x48';
import MediaContent from '../MediaObject/MediaContent';
import Content from '../MediaObject/Content';
import Container from 'components/Container';

import SearchedListNav from 'containers/SearchedListNav';
function SearchListElement(props) {
  const cities = props.trip.city;
  const cityList = () =>
  {
    const length = cities.length;
    return cities.map((city, index) => 
    {
      if(index < length-1)
      return city + "-";
      else return city;
    });
  }
  return (
    <div className='box'>
      <MediaArticle>
        <MediaLeft>
          <Image48x48>
            <img src='https://bulma.io/images/placeholders/128x128.png'/>
          </Image48x48>
        </MediaLeft>
          <MediaContent>
            <Content>
              <p>
                <strong>{props.trip.driver.name} {props.trip.driver.surname}</strong> <small>@nickname</small> <small>XX min</small>
                <br/>
                {cityList()}
                <br/>
                {props.trip.departure_date}
                <br/>
                free space: {props.trip.space}
                <br/>
                cost: {props.trip.cost}
                <br/>
                Additional information: {props.trip.info}
              </p>
            </Content>

            <SearchedListNav tripID = {props.trip.id}/>

          </MediaContent>
      </MediaArticle>
    </div>
  );
}

SearchListElement.propTypes = {

};

export default SearchListElement;
